

function Form() {

    return (

    <form className="form">
        <div className="formText">
            <label htmlFor="nom">Nom* </label>
            <input
                type="text"
                id="nom"
                name="nom"
                required
            >  
            </input>
            <label htmlFor="prenom">Prénom* </label>
            <input
                type="text"
                id="prenom"
                name="prenom"
                required
            >  
            </input>
            <label htmlFor="email">Email* </label>
            <input
                type="email"
                id="email"
                name="email"
                required
            >  
            </input>
        </div>
        <div class="formTextarea">
            <label htmlFor="message">Message* </label>
            <textarea 
                id="message" 
                name="message" 
                required
            >
            </textarea>
        </div>
        <button>Envoyer</button>
    </form>
    )
}

export default Form;