import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer() {

    return (

    <footer className="footer">
        <h3>KhéroWeb</h3>
        <div className='footerIcons'>
            <a href="https://github.com/Kherozhen">
                <FontAwesomeIcon
                className="footerIcon"
                icon={ faGithub }
            />
            </a>
            <button>
                <FontAwesomeIcon
                className="footerIcon"
                icon={ faLinkedin }
            />
            </button> 
        </div>
    </footer>
    )
}

export default Footer;