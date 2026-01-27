import { useState, useEffect } from 'react'
import Search from '../components/Search'
import { getTodayDate } from '../utils/getTodayDate'
import InteressadoInfo from '../components/SearchInteressado/InteressadoInfo'
import api from '../utils/api'
import { toast } from 'react-toastify'
import EditInteressadoModal from './EditInteressadoModal'

const SearchInteressado = () => {
    const [name, setName] = useState('')
    const [initialDate, setInitialDate] = useState('')
    const [finalDate, setFinalDate] = useState(getTodayDate())
    const [category, setCategory] = useState(-1)
    const [course, setCourse] = useState('')
    const [interessados, setInteressados] = useState([])
    const [total, setTotal] = useState(0)
    const [searched, setSearched] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [selectedId, setSelectedId] = useState(null)
    useEffect(() => {
        if (searched && interessados.length == 0) {
            toast.info('Nenhum interessado encontrado')
        }
    }, [searched, interessados])
    async function handleSubmit() {
        const params = {}
        if (name) params.name = name
        if (initialDate) params.initialDate = initialDate
        if (finalDate) params.finalDate = finalDate
        if (category != -1) params.category = category
        if (course) params.course = course
        try {
            const response = await api.get('/interessado/search', { params })
            setInteressados(response.data.interessados)
            setTotal(response.data.total)
            setSearched(true)
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }
    function handleEdit(id) {
        setShowModal(true)
        setSelectedId(id)
    }
    function handleCloseEdit() {
        setShowModal(false)
        setSelectedId(null)
    }
    async function handleDelete(id) {
        try {
            const response = await api.delete(`/interessado/${id}`)
            toast.success(response.data.message)
            setInteressados(prev => prev.filter(i => i.id != id))
            setTotal(prev => Math.max(0, prev - 1))
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }
    const props = {
        name, setName, initialDate, setInitialDate, finalDate, setFinalDate,
        category, setCategory, course, setCourse, total, handleSubmit
    }
    return (
        <>
            <div className='container'>
                <Search {...props} />
                {interessados.map((i, index) => (
                    <InteressadoInfo
                        id={i.id} name={i.name} phone={i.phone} email={i.email} source={i.source}
                        course={i.course} date={i.date} attendant={i.attendant} obs={i.obs}
                        onEdit={() => handleEdit(i.id)} onDelete={() => handleDelete(i.id)}
                    />
                ))}
            </div>
            {showModal && (
                <EditInteressadoModal
                    id={selectedId}
                    onClose={handleCloseEdit}
                    onSaved={(updated) => {
                        setInteressados(prev => prev.map(i => (i.id == updated.id ? updated : i)))
                    }}
                />
            )}
        </>
    )
}

export default SearchInteressado