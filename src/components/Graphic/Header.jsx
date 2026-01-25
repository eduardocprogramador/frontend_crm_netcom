import BtnGoBack from "../BtnGoBack"
import DateInterval from "../DateInterval"

const Header = ({ initialDate, setInitialDate, finalDate, setFinalDate }) => {
    const props = { initialDate, setInitialDate, finalDate, setFinalDate }
    return (
        <div className="row mt-2">
            <div className="col-md-2 col-3">
                <BtnGoBack />
            </div>
            <div className="col-md-6 col-9 text-center mb-3">
                <DateInterval {...props} />
            </div>
            <div className="col-md-2 col-6 text-center">
                <button className="btn btn-primary px-4">Gerar</button>
            </div>
            <div className="col-md-2 col-6 d-flex justify-content-center align-items-center">
                <h5>Total: 0</h5>
            </div>
        </div>
    )
}

export default Header