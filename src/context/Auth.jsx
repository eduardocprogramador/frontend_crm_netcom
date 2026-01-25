import { useState, useEffect, createContext } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import api from "../utils/api"

export const AuthContext = createContext({})

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [auth, setAuth] = useState(false)
    const [authLoading, setAuthLoading] = useState(true)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    function setToken(token){
        localStorage.setItem("token", JSON.stringify(token))
        api.defaults.headers.Authorization = `Bearer ${token}`
        setAuth(true)
    }
    async function authUser(data) {
        setToken(data.token)
        setUser(data.user)
        navigate('/', {replace: true})
    }
    async function register(user) {
        setLoading(true)
        try {
            const {data} = await api.post('/user/register', user)
            await authUser(data)
            toast.success(data.message)
        } catch (error) {
            toast.error(error.response.data.message)
        }
        setLoading(false)
    }
    async function login(user) {
        setLoading(true)
        try {
            const {data} = await api.post('/user/login', user)
            await authUser(data)
            toast.success(data.message)
        } catch (error) {
            toast.error(error.response.data.message)
        }
        setLoading(false)
    }
    function logout(){
        localStorage.removeItem('token')
        api.defaults.headers.Authorization = undefined
        setAuth(false)
        setUser(null)
        navigate("/login", {replace: true})
    }
    useEffect(() => {
        async function checkUser() {
            const token = localStorage.getItem('token')
            if (token) {
                api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`
                try {
                    const {data} = await api.get("/user/check")
                    setAuth(true)
                    setUser(data.currentUser)
                } catch {
                    localStorage.removeItem("token")
                    api.defaults.headers.Authorization = undefined
                    setAuth(false)
                }
            }
            setAuthLoading(false)
        }
        checkUser()
    }, [])
    return (
    <AuthContext value={{user, setUser, auth, authLoading, loading, setLoading, register, login, logout}}>
        {children}
    </AuthContext>
    )
}

export default AuthProvider