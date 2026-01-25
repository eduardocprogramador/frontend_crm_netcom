import { Link } from "react-router-dom"

const CardHome = ({headline, description, color, textBtn1, textBtn2, linkBtn1, linkBtn2}) => {
    return (
        <div className="container">
            <div className="card p-3">
                <div className="">
                    <h4 className="fw-bold">{headline}</h4>
                    <h6 className="fw-bold">{description}</h6>
                </div>
                <div className="card-body">
                    <Link to={linkBtn1} className={`btn btn-${color} w-100 mb-3`}>{textBtn1}</Link>
                    <Link to={linkBtn2} className={`btn btn-${color} w-100`}>{textBtn2}</Link>
                </div>
            </div>
        </div>
    )
}

export default CardHome