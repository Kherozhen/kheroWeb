

function Card ({ img, alt, text }) {

    return (

        <div className="cards">
            <img src={img} alt={alt}/>
            <p>{text}</p>
        </div>

    )
}

export default Card;