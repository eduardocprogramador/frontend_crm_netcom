const MatriculadoInfo = ({ name, phone, course, date, onEdit, onDelete }) => {
    return (
        <div className='py-1'>
            <div className='row mb-2'>
                <div className='col-lg-3 col-md-4 col-6'>
                    <label className='fw-bold'>Nome:</label>
                    <h6>{name}</h6>
                </div>
                <div className='col-lg-3 col-md-4 col-6'>
                    <label className='fw-bold'>Contato:</label>
                    <h6>{phone}</h6>
                </div>
                <div className='col-lg-3 col-md-4 col-6'>
                    <label className='fw-bold'>Curso:</label>
                    <h6>{course}</h6>
                </div>
                <div className='col-lg-3 col-md-4 col-6'>
                    <label className='fw-bold'>Data:</label>
                    <h6>{date}</h6>
                </div>
            </div>
            <button className='btn btn-primary px-4 me-4' onClick={onEdit}>Editar</button>
            <button className='btn btn-danger px-4' onClick={onDelete}>Excluir</button>
            <hr />
        </div>
    )
}

export default MatriculadoInfo