import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    // Fonction pour basculer l'état du menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Vérifie si on est sur la page d'accueil
    const isHomePage = location.pathname === '/';

    return (
        <header>
            <nav className={`menu ${isMenuOpen ? 'expanded' : ''}`}>
                <Link to="/" className="Link">
                    <h1>KhéroWebSite</h1>
                </Link>
                {/* Affiche menuNav uniquement si on est sur la page d'accueil */}
                {isHomePage && (
                    <div className='menuNav'>
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
                    </div>
                )}
            </nav>
        </header>
    );
}

export default Header;