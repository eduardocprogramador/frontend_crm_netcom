const BtnCloseModal = ({onClose}) => {
    return (
        <button className="btn btn-danger" onClick={onClose}>
            <i class="fa-solid fa-xmark"></i> Fechar
        </button>
    )
}

export default BtnCloseModal