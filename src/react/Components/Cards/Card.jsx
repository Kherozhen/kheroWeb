

function Card ({ img, alt,mission, text }) {

    return (

        <div className="cards">
            <img src={img} alt={alt}/>
            <p><span>&nbsp;&nbsp;&nbsp;&nbsp;{mission}</span>{text}</p>
        </div>

    )
}

export default Card;