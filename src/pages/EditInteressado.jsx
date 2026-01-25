import CardForm from "../components/CardForm"
import { useState } from "react"
import { toast } from "react-toastify"
import { useParams } from "react-router-dom"
import CardInteressado from "../components/CardInteressado"

const EditInteressado = () => {
    const { id } = useParams()
    const [name, setName] = useState('Pedro Henrique Sousa')
    const [phone, setPhone] = useState('98998123456')
    const [email, setEmail] = useState('pedro.sousa@gmail.com')
    const [source, setSource] = useState('Instagram')
    const [category, setCategory] = useState(0)
    const [course, setCourse] = useState('Eletrônica')
    const [obs, setObs] = useState('Solicitou informações sobre valor e duração do curso')
    function handleSubmit(){
        if(name == '' || phone == '' || category == -1 || course == ''){
            toast.info('Preencha os campos obrigatórios')
            return
        }
        console.log(name, phone, category, course, email, source, obs)
        toast.success('Interessado editado')
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