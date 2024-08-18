


function Modal(title, content) {

    return (
      <div class="modal-content">
        <button class="close">x</button>
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    );
}


export default Modal;