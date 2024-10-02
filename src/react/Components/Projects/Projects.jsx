
import React, { useState } from "react";
import Modal from "react-modal";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

import jsonData from "../../../App.json";

// Spécifiez l'élément racine pour la modale
Modal.setAppElement('#root');

function Projects () {

    // État pour gérer la modal
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [currentProject, setCurrentProject] = useState({});

    // Ouvre la modale
    const openModal = (project) => {
        setCurrentProject(project);
        setModalIsOpen(true);
    };

    // Ferme la modale
    const closeModal = () => {
        setModalIsOpen(false);
    };


    return (
        <div className="project">
            {jsonData.map((item, idx) => (
                <article className="projectCard" key={idx} onClick={() => openModal(item)}>
                    <div className="imgCoverContainer">
                        <img className="imgCover" src={item.cover} alt={item.title} />
                    </div>
                    <div className="imgLogoContainer">
                        <img className="imgLogo" src={item.logo} alt={item.title} /> 
                    </div>
                </article>
            ))}  

            {/* Modale pour afficher les détails du projet */}
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Détails du projet"
                className="customModal"
                overlayClassName="customOverlay" // arrière de la modal
            >
                <span className="modal">
                    <button onClick={closeModal}>x</button>
                    <h2>{currentProject.title}</h2>
                    <div className="carouselContainer">
                        {/* carrousel */}
                        {currentProject.images && currentProject.images.length > 0 ? (
                            <Carousel showThumbs={false} dynamicHeight={true} className="carousel">
                                {currentProject.images.map((image, idx) => (
                                    <div className="imgContainer" key={idx}>
                                        <img src={image} alt={`Slide ${idx}`} />
                                    </div>
                                ))}
                            </Carousel>
                        ) : (
                            <div>
                                <img src={currentProject.cover} alt={currentProject.title} />
                            </div>
                        )}
                    </div>
                    <div className="text">
                        <p>{currentProject.description}</p>
                        <p>{currentProject.mission}</p>
                        <div className="skillMission">
                            {currentProject.competences && currentProject.competences.length > 0 ? (
                                currentProject.competences.map((competence, idx) => (
                                    <div className="imgContainer" key={idx}>
                                        <img src={competence} alt={`Slide ${idx}`} />
                                    </div>
                                ))
                            ) : (
                                <p>Aucune compétence disponible.</p>
                            )}
                        </div>
                    </div>
                    <div className="linkUrl">
                        {currentProject.link && currentProject.link.trim() !== "" && (
                            <a href={currentProject.link} target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon
                                    className="modalIcon"
                                    icon={ faGlobe }
                                />
                            </a>
                        )}
                    </div>
                    <div className="linkGithub">
                        {currentProject.link_github && (
                            <a href={currentProject.link_github} target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon
                                    className="modalIcon"
                                    icon={ faGithub }
                                />
                             </a>
                        )}
                    </div>
                </span>
            </Modal>
        
        </div>
    
    )
}

export default Projects;