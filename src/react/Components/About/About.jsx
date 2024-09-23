

import Skill from "./Skill";

import logoHtml from "../../../images/Logos/logo_html.png";
import logoCss from "../../../images/Logos/logo_css.png";
import logoSass from "../../../images/Logos/logo_sass.png";
import logoJS from "../../../images/Logos/logo_javascript.png";
import logoReact from "../../../images/Logos/logo_react.png";
import logoRedux from "../../../images/Logos/logo_redux.png";
import logoNodeJs from "../../../images/Logos/logo_nodejs.jpg";
import logoSwagger from "../../../images/Logos/logo_swagger.png";


function About () {

    return (
        <div className="about">
            <div className="aboutContainer">
                <div className="aboutText">
                    <h2>Développeur Web</h2>
                    <h2>-</h2>
                    <h2>Front-End</h2>
                </div>
                <div className="skillContainer">
                    <Skill 
                        img={logoHtml}
                        logo="HTML"
                    />
                    <Skill 
                        img={logoCss}
                        logo="Css"
                    />
                    <Skill 
                        img={logoSass}
                        logo="Sass"
                    />
                    <Skill 
                        img={logoJS}
                        logo="JavaScript"
                    />
                    <Skill 
                        img={logoReact}
                        logo="React"
                    />
                    <Skill 
                        img={logoRedux}
                        logo="Redux"
                    />
                </div>
                <div className="aboutText">
                    <p>Notions en Back-End</p>
                </div>
                <div className="skillContainer">
                    <Skill 
                        img={logoNodeJs}
                        logo="Nodejs"
                    />
                    <Skill 
                        img={logoSwagger}
                        logo="Swagger"
                    />
                </div>
            </div>
        </div>
    )
}

export default About;