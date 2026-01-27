import CardForm from "../components/CardForm"
import { useState } from "react"
import { toast } from "react-toastify"
import { resetForm } from "../utils/resetForm"
import CardMatriculado from "../components/CardMatriculado"
import api from "../utils/api"

const AddMatriculado = () => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [category, setCategory] = useState(-1)
    const [course, setCourse] = useState('')
    async function handleSubmit() {
        const matriculado = { name, phone, category, course }
        try {
            const response = await api.post('/matriculado/add', matriculado)
            resetForm(setName, setPhone, setCourse)
            setCategory(-1)
            toast.success(response.data.message)
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }
    const props = {
        name, setName, phone, setPhone, category,
        setCategory, course, setCourse, handleSubmit
    }
    return (
        <CardForm title='Adicione um Matriculado' add={true}>
            <CardMatriculado {...props} add={true} />
        </CardForm>
    )
}

export default AddMatriculado