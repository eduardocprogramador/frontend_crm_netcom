import { Link } from "react-router-dom"

const BtnGoBack = ({ to = '/' }) => {
    return (
        <Link to={to} className="btn btn-color text-light">
            <i className="fa-solid fa-backward"></i> Voltar
        </Link>
    )
}

export default BtnGoBack