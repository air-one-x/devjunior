import React from 'react';

import './home.style.css';

const Home = () => {

    return (
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
    );
};

export default Home;