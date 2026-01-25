import CardForm from "../components/CardForm"
import { useState } from "react"
import { toast } from "react-toastify"
import CardMatriculado from "../components/CardMatriculado"
import { useParams } from "react-router-dom"

const EditMatriculado = () => {
    const { id } = useParams()
    const [name, setName] = useState('Carlos Eduardo Silva')
    const [phone, setPhone] = useState('98991234567')
    const [category, setCategory] = useState(0)
    const [course, setCourse] = useState('Eletrônica')
    function handleSubmit(){
        if(name == '' || phone == '' || category == -1 || course == ''){
            toast.info('Preencha todos os campos')
            return
        }
        console.log(name, phone, category, course)
        toast.success('Matriculado editado')
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