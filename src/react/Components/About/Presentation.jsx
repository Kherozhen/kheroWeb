import Khero from "../../../images/Photo_KheroWeb.avif";

function Presentation () {

    return (

        <div className="presentation">
            <div className="presentationText">
                <p>Après une reconversion de 9 mois chez OpenClassroom, une nouvelle développeuse est née, prête à affronter la totalité de vos projets.</p>
                <p>Je vous propose donc un site simple, regroupant mes différents travaux, afin de vous montrer, l'étendu de mes capacités.</p>
                <p>Vous pourrez, bien sûr me contacter, il suffit de vous laisser guider, je vous invite à scroller, et à bientôt pour vos idées.</p>
            </div>
            <div className="presentationImg">
               <img src={Khero} alt="KheroWeb" />
            </div>
        </div>
    )
}

export default Presentation;