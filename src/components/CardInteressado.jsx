import SelectsCategoryCourse from "./SelectsCategoryCourse"
import { handlePhoneChange } from "../utils/handlePhoneChange"
import { sources } from "../data/sources"

const CardInteressado = ({
    add, name, setName, phone, setPhone, category, 
    setCategory, course, setCourse, source, setSource, 
    email, setEmail, obs, setObs, handleSubmit
}) => {
    const props = {category, setCategory, course, setCourse}
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
            <div className="row">
                <div className="col-md-6">
                    <label className="mb-1">Email (Opcional):</label>
                    <input type="email"
                        value={email} onChange={e => setEmail(e.target.value)}
                        className="form-control mb-4"
                    />
                </div>
                <div className="col-md-6">
                    <label className="mb-1">Canal (Opcional):</label>
                    <select className="form-control text-center mb-4"
                        value={source} onChange={e => setSource(e.target.value)}
                    >
                        <option value=''>Selecione</option>
                        {sources.map((s, index) => (
                            <option key={index} value={s}>
                                {s}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <label className="mb-1">Observação (Opcional):</label>
                    <textarea type="text"
                        value={obs} onChange={e => setObs(e.target.value)}
                        className="form-control mb-4" rows={3}
                    />
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-md-4 offset-md-4 col-sm-6 offset-sm-3">
                    <button className="btn btn-primary w-100" onClick={handleSubmit}>{add ? 'Adicionar' : 'Editar'}</button>
                </div>
            </div>
        </div>
    )
}

export default CardInteressado