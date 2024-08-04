import { useState } from "react";


function Modal() {
    
    const  [modalIsOpen, setIsOpen] = useState(false);

    const openModal = () => {
       setIsOpen(true);
    }  
    
    const closeModal = () => {
       setIsOpen(false);
    }  

    return (
        <div>
          <button onClick={openModal}>Open Modal</button>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Example Modal"
          >
            <h2>Hello</h2>
            <button onClick={closeModal}>close</button>
          </Modal>
        </div>
    );
}


export default Modal;