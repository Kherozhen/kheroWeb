
import About from "../Components/About/About";
import Banner from "../Components/Banner/Banner";
import ImgBanner from '../../images/banner.jpg';

import Card from "../Components/Cards/Card";
import imgCode from "../../images/code.jpg";
import imgBug from "../../images/bug.jpeg";
import imgOpti from "../../images/optimisation.png";

import Projects from "../Components/Projects/Projects";


function Home() {
  return (
    <main>
      <section id="aboutMe">
        <Banner 
          img={ImgBanner}
          alt="Banière"/>
        <About />
      </section>

      <section>
      <div id="projects">
        <div className="projectsContainer">
          <h2>Projets réalisés</h2>
          <Projects />
        </div>
      </div>
      <div id="mission">
        <h2>Mes missions de développeur</h2>
        <p className="introMission">Le développeur est un créateur de site web mais pas que..</p>
        <Card 
          img={imgCode}
          alt="Image d'un code"
          text="Créer le site internet qui correspond à vos envie est une priorité.
                Grâce à vos maquettes, vos images ou simplement vos souhaits, je ferais en sorte de répondre à 100% à votre demande."
        />
        <Card 
          img={imgBug}
          alt="Image de cherche de bug informatique"
          text="Les bugs sont monnaies courant dans le domaine du codage.
                La mission d'un développeur est aussi de lutter et réparer ces problèmes en surveillant et mettant un jour votre site."
        />
        <Card 
          img={imgOpti}
          alt="Image de recherche d'optimisation"
          text="Un site web n'est jamais réellement terminé, pour être le plus performant et le plus visible, il faut optimiser.
                Faire le référencement du site pour être plus facile à trouver, l'améliorer pour faciliter son utilisation est aussi une mission de développeur."
        />
        <p className="next">...</p>
      </div>
      </section>

      <section id="contact">

      </section>
      
    </main>
  );
}

export default Home;
