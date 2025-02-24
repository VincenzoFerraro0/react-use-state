const Button = ({title, isActive, selected}) => {
    const active = isActive ? "btn__yellow" : "btn__blue"
    return (
        <button className={`btn ${active}`} onClick={ () => selected() }>
            {title}
        </button>
    )
};
export default Button ;