import { Link } from "react-router-dom"

const NotFound = () => {
  return (
  <div className="d-flex justify-content-center align-items-center vh-100">
    <div className="text-center">
      <h1>404</h1>
      <h3>Página não encontrada</h3>
      <p>A página que você procura não existe</p>
      <Link to='/'>Voltar para home</Link>
    </div>
  </div>
  )
}

export default NotFound
