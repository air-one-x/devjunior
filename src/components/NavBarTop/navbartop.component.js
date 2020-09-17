import React, { useEffect, useRef } from 'react';

import './navbartop.style.css';
import Burger from './burger.component';
import ModalInscription from '../../containers/modal.inscription.container';

const NavBarTop = () => {

    let navbar = useRef(null);

    useEffect(()=> {
        window.addEventListener('scroll', () => {
          if(window.pageYOffset > document.querySelector('.navbar--top').offsetTop) {
              navbar.current.classList.add('navbar--black');
          } else {
            navbar.current.classList.remove('navbar--black');
        }
        });
        
    },[]);    
    


    return (
        <div className="navbar--top" ref={navbar}>
            <h1>DEVJUNIOR</h1>

            <ul>
                <li className="item--menu"><a href="#">Entreprises</a></li>
                <li className="item--menu"><a href="#">Jobs</a></li>
                <li className="item--menu"><ModalInscription /></li>
                <li className="item--menu"><a href="#">Connexion</a></li>
                <li className="burger"><Burger /></li>
            </ul>

        </div>
    );
};

export default NavBarTop;