import React, { useState } from 'react';
import "../../styles/navbar.css"
import "../../styles/responsiveNav.css"
import "../../App.css"
import Logo from '../../assets/logoName.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import BurgerMenu from './burgerMenu';

const Navbar = () => {
    return (
        <div className="navbar_bg d-flex align-items-center justify-content-start">
              <BurgerMenu />
            <div className='orderContainer container-fluid d-flex justify-content-between'>
                <div className="brandContainer d-flex align-items-center">
                    <img className='brand' src={Logo} alt="" />
                </div>
                <div className='navBarContainer d-flex align-items-center justify-content-center'>
                    <ul>
                        <li><a href="#">Inicio</a></li>
                    </ul>
                    <ul>
                        <li><a href="Nosotros">Nosotros</a></li>
                    </ul>
                    <ul>
                        <li><a href="Beneficios">Beneficios</a></li>
                    </ul>
                    <ul>
                        <li><a href="Contactanos">Contactanos</a></li>
                    </ul>
                    <ul>
                        <li><a href="Cotizador">Cotizador</a></li>
                    </ul>
                </div>
                <div className='navBarContainerTwo d-flex align-items-center m-0'>
                    <div className='d-flex iconContainerTrio'>
                        <div className='iconContainer d-flex align-items-center justify-content-center'>
                            <a href="https://wa.me/1136098552" target="_blank">
                                <FontAwesomeIcon className='socialMediaIcons whatsApp' icon={faWhatsapp} />
                            </a>
                        </div>
                        <div className='iconContainer d-flex align-items-center justify-content-center'>
                            <a href="https://www.facebook.com/pl.autocreditos"><FontAwesomeIcon className='socialMediaIcons facebook' icon={faFacebook} size="lg" /></a>
                        </div>
                        <div className='iconContainer d-flex align-items-center justify-content-center gradientIg'>
                            <a href="https://www.instagram.com/pl.autocreditos/?hl=es-la" target='_blank'><FontAwesomeIcon className='socialMediaIcons instagram' icon={faInstagram} size="lg" /></a>
                        </div>
                    </div>

                    <button className='loginAccess d-flex align-items-center justify-content-center rounded-pill'>
                        Acceder
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;