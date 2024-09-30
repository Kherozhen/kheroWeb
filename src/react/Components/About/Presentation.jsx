import Khero from "../../../images/Photo_KheroWeb.JPG";

function Presentation () {

    return (

        <div className="presentation">
            <div className="presentationText">
                <p>Après plusieurs années dans l'enseignement pour les enfants, il était temps pour moi de changer.</p>
                <p>J'ai testé différents métiers mais ma passion pour les ordinateurs et les jeux vidéo m'ont poussé à aller vers le domaine des développeurs.</p>
                <p>Beaucoup de personnes autour de moi sont déjà à l'intérieur alors j'ai décidé de me lancer aussi.</p>
                <p>Et donc... me voici ! A la fin de ma formation d'intégrateur Web chez OpenClassroom, je vous présente ce petit site internet qui vous regroupera mes compétences et mes expériences au cours de cette dernière année.</p>
                <p>Bon visionnage, on se retrouve à la fin !</p>
            </div>
            <div className="presentationImg">
               <img src={Khero} alt="KheroWeb" /> 
            </div>
        </div>
    )
}

export default Presentation;