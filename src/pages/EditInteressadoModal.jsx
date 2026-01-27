import CardForm from "../components/CardForm"
import { useState } from "react"
import { toast } from "react-toastify"
import CardInteressado from "../components/CardInteressado"
import { useEffect } from "react"
import api from "../utils/api"

const EditInteressadoModal = ({ id, onClose, onSaved }) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [source, setSource] = useState('')
    const [category, setCategory] = useState(-1)
    const [course, setCourse] = useState('')
    const [obs, setObs] = useState('')
    const [loading, setLoading] = useState(false)
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
            setLoading(true)
            const response = await api.patch(`/interessado/${id}`, interessado)
            toast.success(response.data.message)
            onSaved?.(response.data.interessado)
            onClose()
        } catch (error) {
            toast.error(error.response.data.message)
        } finally {
            setLoading(false)
        }
    }
    const props = {
        name, setName, phone, setPhone, category,
        setCategory, course, setCourse, source, setSource,
        email, setEmail, obs, setObs, handleSubmit, loading
    }
    return (
        <div className="modal fade show d-block" tabIndex="-1" role="dialog" aria-modal="true">
            <div className="modal-dialog modal-xl" role="document">
                <div className="modal-content">
                    <div className="modal-body p-2">
                        <CardForm title="Edite um Interessado" add={false} onClose={onClose}>
                            <CardInteressado {...props} add={false} />
                        </CardForm>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditInteressadoModal