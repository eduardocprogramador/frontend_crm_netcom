import SelectsCategoryCourse from "./SelectsCategoryCourse"
import { handlePhoneChange } from "../utils/handlePhoneChange"

const CardMatriculado = ({
    add, name, setName, phone, setPhone, category,
    setCategory, course, setCourse, handleSubmit, loading
}) => {
    const props = { category, setCategory, course, setCourse }
    return (
        <div>
            <div className="row">
                <div className="col-md-6">
                    <label className="mb-1">Nome:</label>
                    <input type="text"
                        value={name} onChange={e => setName(e.target.value)}
                        className="form-control mb-4"
                    />
                </div>
                <div className="col-md-6">
                    <label className="mb-1">Contato:</label>
                    <input type="text"
                        value={phone} onChange={e => handlePhoneChange(e, setPhone)}
                        className="form-control mb-4" placeholder="(XX) XXXXX-XXXX"
                    />
                </div>
            </div>
            <SelectsCategoryCourse {...props} />
            <div className="row mt-3">
                <div className="col-md-4 offset-md-4 col-sm-6 offset-sm-3">
                    <button className="btn btn-primary w-100" onClick={handleSubmit} disabled={loading}>
                        {loading ? 'Carregando...' : add ? 'Adicionar' : 'Editar'}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CardMatriculado