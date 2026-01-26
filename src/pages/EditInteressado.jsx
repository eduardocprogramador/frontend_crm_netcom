import CardForm from "../components/CardForm"
import { useState } from "react"
import { toast } from "react-toastify"
import { useParams } from "react-router-dom"
import CardInteressado from "../components/CardInteressado"
import { useEffect } from "react"
import api from "../utils/api"

const EditInteressado = () => {
    const { id } = useParams()
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [source, setSource] = useState('')
    const [category, setCategory] = useState(-1)
    const [course, setCourse] = useState('')
    const [obs, setObs] = useState('')
    useEffect(() => {
        async function load() {
            try {
                const response = await api.get(`/interessado/${id}`)
                setName(response.data.interessado.name)
                setPhone(response.data.interessado.phone)
                setCategory(Number(response.data.interessado.category))
                setCourse(response.data.interessado.course)
                setEmail(response.data.interessado.email)
                setSource(response.data.interessado.source)
                setObs(response.data.interessado.obs)
            } catch (error) {
                toast.error(error.response.data.message)
            }
        }
        load()
    }, [id])
    async function handleSubmit() {
        const interessado = { name, phone, category, course, email, source, obs }
        try {
            const response = await api.patch(`/interessado/${id}`, interessado)
            toast.success(response.data.message)
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }
    const props = {
        name, setName, phone, setPhone, category,
        setCategory, course, setCourse, source, setSource,
        email, setEmail, obs, setObs, handleSubmit
    }
    return (
        <CardForm title='Edite um Interessado' goBack='/consultar_interessado'>
            <CardInteressado {...props} add={false} />
        </CardForm>
    )
}

export default EditInteressado