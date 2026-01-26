import BtnGoBack from "../BtnGoBack"
import DateInterval from "../DateInterval"

const Header = ({ initialDate, setInitialDate, finalDate, setFinalDate, total, handleSubmit }) => {
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
                <button className="btn btn-primary px-4" onClick={handleSubmit}>Gerar</button>
            </div>
            <div className="col-md-2 col-6 d-flex justify-content-center align-items-center">
                <h5>Total: {total}</h5>
            </div>
        </div>
    )
}

export default Header