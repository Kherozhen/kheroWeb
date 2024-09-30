

function Card ({ img, alt, mission, text }) {

    return (

        <div className="cards">
            <div className="containerImgCard">
                <img src={img} alt={alt}/>
            </div>
            <h3>{mission}</h3>
            <p>{text}</p>
        </div>

    )
}

export default Card;