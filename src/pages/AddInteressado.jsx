import CardForm from "../components/CardForm"
import { useState } from "react"
import { toast } from "react-toastify"
import { resetForm } from "../utils/resetForm"
import CardInteressado from "../components/CardInteressado"
import api from "../utils/api"

const AddInteressado = () => {
    const [name, setName] = useState('')
    const [source, setSource] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [category, setCategory] = useState(-1)
    const [course, setCourse] = useState('')
    const [obs, setObs] = useState('')
    async function handleSubmit() {
        const interessado = { 
            name, phone, category, course, source, email, obs 
        }
        try {
            const response = await api.post('/interessado/add', interessado)
            resetForm(setName, setPhone, setCourse, setSource, setEmail, setObs)
            setCategory(-1)
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
        <CardForm title='Adicione um Interessado' add={true}>
            <CardInteressado {...props} add={true} />
        </CardForm>
    )
}

export default AddInteressado