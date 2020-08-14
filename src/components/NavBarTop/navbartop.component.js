import React from 'react';

import './navbartop.style.css';
import Burger from './burger.component';

const NavBarTop = () => {

    return (
        <div className="navbar--top">
            <h1>DEVJUNIOR</h1>

            <ul>
                <li className="item--menu"><a href="#">Entreprises</a></li>
                <li className="item--menu"><a href="#">Jobs</a></li>
                <li className="item--menu"><button>Inscription</button></li>
                <li className="item--menu"><a href="#">Connexion</a></li>
                <li className="burger"><Burger /></li>
            </ul>

        </div>
    );
};

export default NavBarTop;