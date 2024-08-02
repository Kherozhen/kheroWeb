
function Skill ({ img, logo }) {

    return (
        <div className="skills">
            <div className="skill">
                <img src={img} alt={logo} />
                <p>{logo}</p>
            </div>
        </div>
    )
}

export default Skill;