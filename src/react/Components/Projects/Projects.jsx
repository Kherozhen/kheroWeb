
import jsonData from "../../../App.json";

function Projects () {

    return (
        <div className="projects">
            {jsonData.map((item, index) => (
                <article className="projectCard" key={index}>
                    <button>
                        <img className="imgCover" src={item.cover} alt={item.title} />
                    </button>
                    <img className="imgLogo" src={item.logo} alt={item.title} />
                    
                </article>
            ))}
        </div>
    
    )
}

export default Projects;