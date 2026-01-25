import { useContext } from "react"
import { AuthContext } from "../context/Auth"
import { Navigate } from "react-router-dom"

const Private = ({children}) => {
  const {auth, authLoading} = useContext(AuthContext)
  if(authLoading) {
    return <p>Carregando...</p>
  }
  if(!auth) {
    return <Navigate to="/login" />
  }
  return children
}

export default Private