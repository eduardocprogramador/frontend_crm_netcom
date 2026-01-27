const InteressadoInfo = ({ 
    name, phone, email, source, course, 
    date, attendant, obs, onEdit, onDelete 
}) => {
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
                    <label className='fw-bold'>Canal:</label>
                    <h6>{source}</h6>
                </div>
                <div className='col-lg-3 col-md-4 col-6'>
                    <label className='fw-bold'>Email:</label>
                    <br />
                    <small>{email}</small>
                </div>
            </div>
            <div className='row mb-2'>
                <div className='col-lg-3 col-md-4 col-6'>
                    <label className='fw-bold'>Curso:</label>
                    <h6>{course}</h6>
                </div>
                <div className='col-lg-3 col-md-4 col-6'>
                    <label className='fw-bold'>Data:</label>
                    <h6>{date}</h6>
                </div>
                <div className='col-lg-3 col-md-4 col-6'>
                    <label className='fw-bold'>Atendente:</label>
                    <h6>{attendant}</h6>
                </div>
                <div className='col-lg-3 col-md-4 col-6'>
                    <label className='fw-bold'>Obs:</label>
                    <br />
                    <small>{obs}</small>
                </div>
            </div>
            <button className='btn btn-primary px-4 me-4' onClick={onEdit}>Editar</button>
            <button className='btn btn-danger px-4' onClick={onDelete}>Excluir</button>
            <hr />
        </div>
    )
}

export default InteressadoInfo