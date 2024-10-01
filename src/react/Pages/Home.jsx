import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { toggleForm } from "../../Redux/Actions/ContactAction";

import Presentation from "../Components/About/Presentation";
import About from "../Components/About/About";
import Banner from "../Components/Banner/Banner";
import ImgBanner from '../../images/banner.avif';
import ImgBannerMobile from '../../images/bannerMobile.avif';


import Card from "../Components/Cards/Card";
import imgCode from "../../images/code.avif";
import imgBug from "../../images/bug.avif";
import imgOpti from "../../images/optimisation.avif";

import Projects from "../Components/Projects/Projects";

import Form from "../Components/Form/Form";
import Contact from "../Components/Form/Contact";

import Thanks from "../Components/Thanks/Thanks";


function Home() {

    // Etat pour l'image de la bannière
    const [currentImgBanner, setCurrentImgBanner] = useState(
      window.innerWidth >= 768 ? ImgBanner : ImgBannerMobile
    );
  
    // Fonction pour gérer les changements de taille de l'écran
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setCurrentImgBanner(ImgBanner);
      } else {
        setCurrentImgBanner(ImgBannerMobile);
      }
    };

    useEffect(() => {
      //appeler la fonction une fois que la taille de l'écran est vérifié
      window.addEventListener("resize", handleResize);
      handleResize();
      
      //enleve la fonction si il en a pas besoin
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);

    // Faire le switch entre le form et les coordonnées
    const isFormVisible = useSelector((state) => state.form.isFormVisible);
    const dispatch = useDispatch();

    const handleToggle = () => {
      dispatch(toggleForm());
    };


  return (
    <>
      <Banner 
        img={currentImgBanner}
        alt="Banière"
        loading="lazy"
      />
      <main>
        <section className="startPage">
          
          <Presentation />
          
        </section>

        <section id="aboutMe">
          <About />
        </section>

        <section className="sectionMissionsProjects">
          <div id="projects">
            <div className="projectsContainer">
              <h2>Projets réalisés</h2>
              <Projects />
            </div>
          </div>
          <div id="missions">
            <h2>Mes missions</h2>
            <p className="introMission">en tant que développeur</p>
            <div className="containerCards">
              <Card 
                img={imgCode}
                alt="Image d'un code"
                mission="Créer votre site internet"
                text="Je serais ravie de mettre mes compétences aux services de vos envies et de créer le site internet qui correspond le mieux à vos projets."
              />
              <Card 
                img={imgBug}
                alt="Image de cherche de bug informatique"
                mission="Maintenance de votre site"
                text="Un site n'est jamais totalement terminé, que ça soit pour rester la pointe de la technologie ou de la sécurité. Sauvegarde, audit, je suis là pour vous aider."
              />
              <Card 
                img={imgOpti}
                alt="Image de recherche d'optimisation"
                mission="Optimiser votre site web"
                text="Les clefs de la visibilité sont l'optimisation et le référencement. Si, ils sont bien préparer aucun visiteur aura de difficulté à vous trouver. Et si on regardait ?"   
              />
            </div>
          </div>
        </section>

        <section id="contact">
          <div className="contactContainer">
            <h2>Une idée, une envie ?</h2>
            <p>Parlons-en !</p>
            <div>
              <button onClick={handleToggle}>
                {isFormVisible ? 'O' : 'X'}
              </button>
              {isFormVisible ? <Form /> : <Contact />}
            {/* <Form /> */}
            </div>
          </div>
        </section>
        
        <Thanks />
      </main>
    </>
  );
}

export default Home;
