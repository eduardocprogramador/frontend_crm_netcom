import Foto from '../../public/img/perfil.png'
import Title from '../components/Title'
import { useState } from 'react'
import { AuthContext } from "../context/Auth"
import { useContext } from 'react'
import { toast } from "react-toastify"
import api from '../utils/api'

const Perfil = () => {
    const { user, setUser, loading, setLoading, logout } = useContext(AuthContext)
    const [name, setName] = useState(user?.name)
    const [email, setEmail] = useState(user?.email)
    const [imgFile, setImgFile] = useState(null)
    const [preview, setPreview] = useState(null)
    function handleFileChange(e) {
        const file = e.target.files[0]
        if (!file) return
        setImgFile(file)
        setPreview(URL.createObjectURL(file))
    }
    async function handleSubmit(e) {
        e.preventDefault()
        setLoading(true)
        const formData = new FormData()
        formData.append('name', name)
        formData.append('email', email)
        if (imgFile) {
            formData.append('img', imgFile)
        }
        try {
            const token = localStorage.getItem('token')
            const { data } = await api.patch('/user/update', formData, {
                headers: {
                    Authorization: `Bearer ${JSON.parse(token)}`,
                    'Content-Type': 'multipart/form-data'
                }
            })
            setUser(data.user)
            toast.success(data.message)
        } catch (error) {
            toast.error(error.response.data.message)
        }
        setLoading(false)
    }
    const userImgURL = user?.img ? `${import.meta.env.VITE_API}/img/user/${user.img}` : null
    return (
        <div className="container mt-4 mb-3">
            <Title>Perfil</Title>
            <div className="col-md-6 offset-md-3">
                <div className="card">
                    <div className="col-4 offset-4 mt-4">
                        <img src={preview ? preview : userImgURL ? userImgURL : Foto} className="img-fluid rounded-circle" />
                    </div>
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            <label className="mb-1">Imagem:</label>
                            <br />
                            <input type='file' name='img' accept='image/*' onChange={handleFileChange} className="form-control mb-3" />
                            <label className="mb-1">Username:</label>
                            <input required type="text" value={name} onChange={e => setName(e.target.value)} className="form-control mb-3" />
                            <label className="mb-1">Email:</label>
                            <input required type="email" value={email} onChange={e => setEmail(e.target.value)} className="form-control mb-3" />
                            <div className="col-md-6 offset-md-3 col-8 offset-2">
                                <input type="submit" value={loading ? 'Carregando...' : 'Editar'} disabled={loading} className="form-control btn btn-color text-light mb-4" />
                            </div>
                        </form>
                        <div className="col-md-6 offset-md-3 col-8 offset-2">
                            <button onClick={logout} className="form-control btn btn-danger text-light mb-3">Sair</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Perfil