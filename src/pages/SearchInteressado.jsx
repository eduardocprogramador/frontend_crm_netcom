import { useState } from 'react'
import Search from '../components/Search'
import { getTodayDate } from '../utils/getTodayDate'
import InteressadoInfo from '../components/SearchInteressado/InteressadoInfo'
import api from '../utils/api'

const SearchInteressado = () => {
    const [name, setName] = useState('')
    const [initialDate, setInitialDate] = useState('')
    const [finalDate, setFinalDate] = useState(getTodayDate())
    const [category, setCategory] = useState(-1)
    const [course, setCourse] = useState('')
    const [interessados, setInteressados] = useState([])
    const [total, setTotal] = useState(0)
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
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }
    const props = { 
        name, setName, initialDate, setInitialDate, finalDate, setFinalDate, 
        category, setCategory, course, setCourse, total, handleSubmit 
    }
    return (
        <div className='container'>
            <Search {...props} />
            {interessados.map((i, index) => (
                <InteressadoInfo
                    id={i.id} name={i.name} phone={i.phone} email={i.email} source={i.source}
                    course={i.course} date={i.date} attendant={i.attendant} obs={i.obs}
                />
            ))}
        </div>
    )
}

export default SearchInteressado