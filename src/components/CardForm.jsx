import BtnGoBack from "./BtnGoBack"
import BtnCloseModal from "./BtnCloseModal"
import Title from "./Title"

const CardForm = ({ children, title, add, onClose }) => {
  return (
    <div className="container">
      <div className="mb-4"></div>
      <Title btn={
        add ? <BtnGoBack /> : <BtnCloseModal onClose={onClose} />
      }>{title}</Title>
      <div className="card p-4">
        {children}
      </div>
    </div>
  )
}

export default CardForm