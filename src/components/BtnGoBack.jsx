import { Link } from "react-router-dom"

const BtnGoBack = () => {
    return (
        <Link to='/' className="btn btn-color text-light">
            <i className="fa-solid fa-backward"></i> Voltar
        </Link>
    )
}

export default BtnGoBack