
import jsonData from "../../../App.json";

function Projects () {

    return (
        <div className="project">
            {jsonData.map((item, index) => (
                <article className="projectCard" key={index}>
                    <button>
                        <img className="imgCover" src={item.cover} alt={item.title} />
                    </button>
                    <img className="imgLogo" src={item.logo} alt={item.title} />
                    
                </article>
            ))}
            <p className="next">...</p>
        </div>
    
    )
}

export default Projects;