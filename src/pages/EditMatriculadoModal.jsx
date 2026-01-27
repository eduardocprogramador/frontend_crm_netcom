import CardForm from "../components/CardForm"
import { useState } from "react"
import { toast } from "react-toastify"
import CardMatriculado from "../components/CardMatriculado"
import { useEffect } from "react"
import api from "../utils/api"

const EditMatriculadoModal = ({ id, onClose, onSaved }) => {
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
            onSaved?.(response.data.matriculado)
            onClose()
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }
    const props = {
        name, setName, phone, setPhone, category,
        setCategory, course, setCourse, handleSubmit
    }
    return (
        <div className="modal fade show d-block" tabIndex="-1" role="dialog" aria-modal="true">
            <div className="modal-dialog modal-xl" role="document">
                <div className="modal-content">
                    <div className="modal-body p-2">
                        <CardForm title="Edite um Matriculado" add={false} onClose={onClose}>
                            <CardMatriculado {...props} add={false} />
                        </CardForm>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditMatriculadoModal