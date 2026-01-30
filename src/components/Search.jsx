import SelectsCategoryCourse from "./SelectsCategoryCourse"
import BtnGoBack from "./BtnGoBack"
import DateInterval from "./DateInterval"

const Search = ({
    initialDate, setInitialDate, finalDate, setFinalDate, name, setName, 
    category, setCategory, course, setCourse, total, handleSubmit, loading
}) => {
    const propsDate = { initialDate, setInitialDate, finalDate, setFinalDate }
    const propsSelects = { category, setCategory, course, setCourse }
    return (
        <div className='mt-1'>
            <BtnGoBack />
            <div className='row mt-3'>
                <div className='col-md-6 mb-3'>
                    <DateInterval {...propsDate} />
                </div>
                <div className='col-md-6'>
                    <input type="text"
                        value={name} onChange={e => setName(e.target.value)}
                        className="form-control mb-4" placeholder='Nome'
                    />
                </div>
            </div>
            <SelectsCategoryCourse {...propsSelects} />
            <div className="row mt-1">
                <div className="col-md-3 col-sm-4 col-6 mx-auto">
                    <button className="btn btn-primary w-100" onClick={handleSubmit} disabled={loading}>
                        {loading ? 'Carregando...' : 'Filtrar'}
                    </button>
                </div>
            </div>
            <div className="d-flex justify-content-end me-2 mt-1">
                <h5 className="">Total: {total}</h5>
            </div>
            <hr />
        </div>
    )
}

export default Search