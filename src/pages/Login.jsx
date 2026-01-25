import { Link } from "react-router-dom"
import CardAuth from "../components/Auth/CardAuth"
import { useState, useContext } from "react"
import { AuthContext } from "../context/Auth"

const Login = () => {
  const {loading, login} = useContext(AuthContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  async function handleSubmit(e){
    e.preventDefault()
    const user = {email, password}
    await login(user)
  }
  return (
  <CardAuth headline='Login'>
    <form onSubmit={handleSubmit}>
      <label className="mb-1">Email:</label>
      <input required type="text" value={email} onChange={e => setEmail(e.target.value)} className="form-control mb-3"/>
      <label className="mb-1">Senha:</label>
      <input required type="password" value={password} onChange={e => setPassword(e.target.value)} className="form-control mb-3"/>
      <div className="col-md-6 offset-md-3 col-8 offset-2">
        <input type="submit" value={loading ? 'Carregando...' : 'Entrar'} disabled={loading} className="form-control btn btn-color text-light mb-4" />
      </div>
    </form>
    <span>Não possui uma conta? </span>
    <Link to='/register'>crie aqui</Link>
  </CardAuth>
  )
}

export default Login