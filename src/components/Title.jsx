import BtnGoBack from "./BtnGoBack"

const Title = ({children, goBack}) => {
  return (
    <div className="d-flex align-items-center position-relative mb-4">
      <BtnGoBack to={goBack} />
      <h3 className="position-absolute start-50 translate-middle-x m-0">
        {children}
      </h3>
    </div>
  )
}

export default Title