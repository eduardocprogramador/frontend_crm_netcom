import { useEffect, useState } from 'react'
import Search from '../components/Search'
import { getTodayDate } from '../utils/getTodayDate'
import MatriculadoInfo from '../components/SearchMatriculado/MatriculadoInfo'
import api from '../utils/api'
import { toast } from 'react-toastify'
import EditMatriculadoModal from './EditMatriculadoModal'

const SearchMatriculado = () => {
    const [name, setName] = useState('')
    const [initialDate, setInitialDate] = useState('')
    const [finalDate, setFinalDate] = useState(getTodayDate())
    const [category, setCategory] = useState(-1)
    const [course, setCourse] = useState('')
    const [matriculados, setMatriculados] = useState([])
    const [total, setTotal] = useState(0)
    const [searched, setSearched] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [selectedId, setSelectedId] = useState(null)
    useEffect(() => {
        if (searched && matriculados.length == 0) {
            toast.info('Nenhum matriculado encontrado')
        }
    }, [searched, matriculados])
    async function handleSubmit() {
        const params = {}
        if (name) params.name = name
        if (initialDate) params.initialDate = initialDate
        if (finalDate) params.finalDate = finalDate
        if (category != -1) params.category = category
        if (course) params.course = course
        try {
            const response = await api.get('/matriculado/search', { params })
            setMatriculados(response.data.matriculados)
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
            const response = await api.delete(`/matriculado/${id}`)
            toast.success(response.data.message)
            setMatriculados(prev => prev.filter(m => m.id != id))
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
                {matriculados.map((m, index) => (
                    <MatriculadoInfo
                        id={m.id} name={m.name} phone={m.phone} course={m.course} date={m.date}
                        onEdit={() => handleEdit(m.id)} onDelete={() => handleDelete(m.id)}
                    />
                ))}
            </div>
            {showModal && (
                <EditMatriculadoModal
                    id={selectedId}
                    onClose={handleCloseEdit}
                    onSaved={(updated) => {
                        setMatriculados(prev => prev.map(m => (m.id == updated.id ? updated : m)))
                    }}
                />
            )}
        </>
    )
}

export default SearchMatriculado