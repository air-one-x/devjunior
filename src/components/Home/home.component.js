import React from 'react';
import { v4 as id } from 'uuid';


import './home.style.css';
import Logos from '../../Data/logos';

const Home = () => {

    return (
        <div>



            <div className="home--page">
                <div className="home--page__content">
                    <h1>Car nos développeurs juniors ont du talents !</h1>
                    <p>Devjunior a était conçu pour donner de la visibilité aux développeurs juniors mais aussi pour montrer aux entreprises que les développeurs juniors ont du talents.  </p>
                    <br></br>
                    <p>CDI, CDD, stage, alternance ou freelance</p>
                    <br></br>
                    <button className="button__inscription">S'inscrire</button>
                    <button className="button__connexion">Se connecter</button>
                </div>
            <div className="home--page__picture"></div>
            </div>



            <ul className="banner--compagnies row">
                {
                    Logos.map((logo)=> (
                    <li 
                        className="col-sm-4 col-lg-2 col-4"
                        key={id()}
                        style={{
                            backgroundImage: `url(${logo.logo})`,
                            width: '100px',
                            height: '100px',
                            backgroundSize: 'contain',
                            backgroundPosition : 'center',
                            backgroundRepeat: 'no-repeat'
                        }}>
                    </li>))
                }
            </ul>

        </div>
    );
};

export default Home;