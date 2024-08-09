
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';

function Header() {
    // État pour gérer l'ouverture/fermeture du menu
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Fonction pour basculer l'état du menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header>
            <nav className={`menu ${isMenuOpen ? 'expanded' : ''}`}>
                <h1>KhéroWeb</h1>
                <FontAwesomeIcon
                    className="navIcon"
                    icon={isMenuOpen ? faX : faBars}
                    onClick={toggleMenu}
                />
                {isMenuOpen && (
                    <div className="navLinks">
                        <a href="#projects">Projets</a>
                        <a href="#missions">Missions</a>
                        <a href="#contact">Contact</a>
                    </div>
                )}
            </nav>
        </header>
    );
}

export default Header;