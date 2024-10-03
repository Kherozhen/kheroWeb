import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Modal from 'react-modal';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

Modal.setAppElement('#root');

function Form() {

    const formContact = useRef();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_vo59sai', 
            'template_l1pqt43', 
            formContact.current, 
            'kXcGgOsyhAxiMO_Rv'
        )
        .then((result) => {
            console.log('Email envoyé avec succès !', result.text);
            setIsModalOpen(true);  // Ouvrir la modal au succès
        }, (error) => {
            console.error('Erreur lors de l\'envoi de l\'email...', error.text);
        });

        e.target.reset();
    };

    // Fonction pour fermer la modal
    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <form className="form" ref={formContact}  onSubmit={sendEmail}>
                <div className='inputsForm'>
                    <div className="formText">
                        <label htmlFor="nom">Nom </label>
                        <input
                            type="text"
                            id="nom"
                            name="nom"
                            required
                        >  
                        </input>
                        <label htmlFor="prenom">Prénom </label>
                        <input
                            type="text"
                            id="prenom"
                            name="prenom"
                            required
                        >  
                        </input>
                        <label htmlFor="email">Email </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                        >  
                        </input>
                    </div>
                    <div className="formTextarea">
                        <label htmlFor="message">Message </label>
                        <textarea 
                            id="message" 
                            name="message" 
                            required
                        >
                        </textarea>
                    </div>
                </div>
                <button type="submit">Envoyer</button>
            </form>

            {/* Modal de confirmation */}
            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                contentLabel="Confirmation d'envoi"
                className="modalSuccessForm"
                overlayClassName="modalSuccessOverlay"
            >
                <h2>Merci !</h2>
                <div className="textModalSucess"> 
                    <p>Votre email a été envoyé avec succès !</p>
                    <p>N'oubliez pas de surveiller vos mails.</p>
                </div>
                <FontAwesomeIcon 
                    className='iconCheck'
                    icon={faCheck} 
                />
                <button onClick={closeModal}>x</button>
            </Modal>
                
        </>
    );
}

export default Form;