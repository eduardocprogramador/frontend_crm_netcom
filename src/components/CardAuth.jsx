import Logo from '../../public/img/logo.png'

const CardAuth = ({children, headline}) => {
  return (
  <div className="container">
    <div className="row align-items-center vh-100">
      <div className="col-md-6 offset-md-3">
        <div className="card">
          <div className="col-3 mx-auto mt-4 mb-2">
            <img src={Logo} alt="Logo" className="img-fluid" />
          </div>
          <div className="card-body">
            <h3 className="text-center mb-3">{headline}</h3>
            <div>
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default CardAuth