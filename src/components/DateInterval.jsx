const DateInterval = ({initialDate, setInitialDate, finalDate, setFinalDate}) => {
    return (
        <div className="d-flex align-items-center">
            <input
                type="date" className="form-control w-auto"
                value={initialDate}
                onChange={e => setInitialDate(e.target.value)}
            />
            <span className="mx-3">a</span>
            <input
                type="date" className="form-control w-auto"
                value={finalDate}
                onChange={e => setFinalDate(e.target.value)}
            />
        </div>
    )
}

export default DateInterval