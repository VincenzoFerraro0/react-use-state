const Card = ({ title, description }) => {
    return (
        <div className="card">
            <h3 className="card-title">{title}</h3>
            <p className="card-text">{description}</p>
        </div>
    )
};
export default Card;