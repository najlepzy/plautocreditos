import React, { useState } from 'react';

const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`burgerMenuContainer d-flex align-items-center justify-content-start ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <div className="burgerMenuSquare">
                <div className={`line line1 ${isOpen ? 'open' : ''}`}></div>
                <div className={`line line2 ${isOpen ? 'open' : ''}`}></div>
                <div className={`line line3 ${isOpen ? 'open' : ''}`}></div>
            </div>
            {isOpen && (
                <div className="navBarContainerMobile">
                    <ul>
                        <li><a href="#">Inicio</a></li>
                        <li><a href="#">Acerca de</a></li>
                        <li><a href="#">Servicios</a></li>
                        <li><a href="#">Contacto</a></li>
                    </ul>
                </div>
            )}
        </div>

    );
}

export default BurgerMenu;