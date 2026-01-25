import { Link } from "react-router-dom"
import Logo from '../../public/img/logo.png'
import Foto from '../../public/img/perfil.png'
import { AuthContext } from "../context/Auth"
import { useContext } from "react"

const Navbar = () => {
    const { user } = useContext(AuthContext)
    const userImgURL = user?.img ? `${import.meta.env.VITE_API}/img/user/${user.img}` : null
    return (
        <header>
            <nav className="navbar navbar-expand-md fixed-top">
                <Link to="/" className="navbar-brand ms-5 me-auto">
                    <img src={Logo} id="logo" width="120" />
                </Link>
                <Link to="/perfil" className="nav-link me-5">
                    <img src={userImgURL ? userImgURL : Foto} width="50" height="50" className="rounded-circle" alt="Perfil" />
                </Link>
            </nav>
        </header>
    )
}

export default Navbar