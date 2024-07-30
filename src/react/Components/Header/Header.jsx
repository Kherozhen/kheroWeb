
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Header() {

    return(
        <nav>
            <FontAwesomeIcon
                className="navIcon"
                icon={ faBars }
            />
        </nav>
    )
}

export default Header;