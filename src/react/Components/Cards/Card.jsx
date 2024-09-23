

function Card ({ img, alt, mission, text }) {

    return (

        <div className="cards">
            <img src={img} alt={alt}/>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;<span>{mission}</span>{text}</p>
        </div>

    )
}

export default Card;