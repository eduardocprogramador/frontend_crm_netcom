import CardForm from "../components/CardForm"
import { useState } from "react"
import { toast } from "react-toastify"
import CardMatriculado from "../components/CardMatriculado"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import api from "../utils/api"

const EditMatriculado = () => {
    const { id } = useParams()
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [category, setCategory] = useState(-1)
    const [course, setCourse] = useState('')
    useEffect(() => {
        async function load() {
            try {
                const response = await api.get(`/matriculado/${id}`)
                setName(response.data.matriculado.name)
                setPhone(response.data.matriculado.phone)
                setCategory(Number(response.data.matriculado.category))
                setCourse(response.data.matriculado.course)
            } catch (error) {
                toast.error(error.response.data.message)
            }
        }
        load()
    }, [id])
    async function handleSubmit() {
        const matriculado = { name, phone, category, course }
        try {
            const response = await api.patch(`/matriculado/${id}`, matriculado)
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
        <CardForm title='Edite um Matriculado' goBack='/consultar_matriculado'>
            <CardMatriculado {...props} add={false} />
        </CardForm>
    )
}

export default EditMatriculado