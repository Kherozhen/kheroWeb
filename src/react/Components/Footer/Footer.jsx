import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer() {

    return (

    <footer className="footer">
        <h4>KhéroWebSite</h4>
        <p>@KWS</p>
        <div className='footerIcons'>
            <a href="https://github.com/Kherozhen">
                <FontAwesomeIcon
                className="footerIcon"
                icon={ faGithub }
            />
            </a>
            <a href="">
                <FontAwesomeIcon
                className="footerIcon"
                icon={ faLinkedin }
            />
            </a> 
        </div>
    </footer>
    )
}

export default Footer;