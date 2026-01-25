import Title from "./Title"

const CardForm = ({ children, title, goBack }) => {
  return (
    <div className="container">
      <div className="mb-4"></div>
      <Title goBack={goBack}>{title}</Title>
      <div className="card p-4">
        {children}
      </div>
    </div>
  )
}

export default CardForm