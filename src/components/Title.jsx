const Title = ({children, btn}) => {
    return (
        <div className="d-flex align-items-center position-relative mb-4">
            {btn}
            <h3 className="position-absolute start-50 translate-middle-x m-0">
                {children}
            </h3>
        </div>
    )
}

export default Title