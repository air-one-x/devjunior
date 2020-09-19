import React from 'react';
import { v4 as id } from 'uuid';


import './home.style.css';
import Logos from '../../Data/logos';
import Slide from '../../containers/slideHome.container';
import ButtonRegister from '../../containers/inscription.container';

const Home = () => {


    return (
        <div>



            <div className="home--page">

                <div className="home--page__content">
                    <h1>Car nos développeurs juniors ont du talent !</h1>
                    <p>Devjunior a était conçu pour donner de la visibilité aux développeurs juniors mais aussi pour montrer aux entreprises que les développeurs juniors ont du talent.  </p>
                    <br></br>
                    <p className="contrats">CDI, CDD, stage, alternance ou freelance</p>
                    <div className="button--list">
                        <div className="button--list__register"><ButtonRegister /></div>
                        <button className="button__connexion">Se connecter</button>
                    </div>
                    
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




           <div className="discover--compagnies row">

               <div className="discover--compagnies__content col-lg-6 col-md-12 col-sm-12 col-12">
                   <h2>Trouvez une entreprise qui vous ressemble </h2>
                   <p>Nous pensons qu'il devrait être simple pour un développeur junior de trouver une entreprise afin de vivre de sa passion.</p>
                   <ul>
                      <li><span>Choisissez</span> vos préférences</li>
                      <li><span>Retrouvez</span> les recommandations des anciens et actuels développeurs</li>
                      <li><span>Prenez</span> contact avec les entreprises</li>
                   </ul>
                   </div>

                   <div className="discover--compagnies__picture col-lg-6 col-md-12 col-sm-12 col-12"></div>
                   <div className="button--search--compagnies col-lg-12 col-sm-12 col-12"><button>Découvrir les entreprises</button></div>   
               </div>



            <div className="triangle--top--developer"></div>





            <div className="discover--developer row">

                <div className="discover--developer__picture col-lg-6 col-md-12 col-sm-12 col-12"></div>

                <div className="discover--developer__content col-lg-6 col-md-12 col-sm-12 col-12">
                   <h2>Trouvez le candidat idéal pour vos missions </h2>
                   <p>Afin de faciliter le recrutement de jeunes développeurs, nous avons repensé le CV. Faites confiance aux futurs talents.</p>
                   <ul>
                      <li><span>Choisissez</span> selon vos critères</li>
                      <li><span>Testez</span> les candidats </li>
                      <li><span>Prenez</span> contact avec les développeurs</li>
                   </ul>
                </div>
                <div className="button--search--déveloper col-lg-12 col-sm-12 col-12"><button>Découvrir les développeurs </button></div>

            </div>



            <div className="triangle--bottom--developer"></div>





            <div className="discover--job row">

               <div className="discover--job__content col-lg-6 col-md-12 col-sm-12 col-12">
                   <h2>Recherchez et trouvez votre job de rêve </h2>
                   <p>Trouver une entreprise est parfois compliqué. Nous vous aidons dans vos recherches afin de vivre de votre passion.</p>
                   <ul>
                      <li><span>Contrôlez</span> vos candidatures</li>
                      <li><span>Retrouvez</span> les emplois auxquels vous avez postulé</li>
                      <li><span>Devenez</span> invisible en choisissant les entreprises qui ne vous correspondent pas</li>
                   </ul>
                   </div>

                   <div className="discover--job__picture col-lg-6 col-md-12 col-sm-12 col-12"></div>
                   <div className="button--search--job col-lg-12 col-sm-12 col-12"><button>Découvrir les offres</button></div>   
            </div>

            <div className="slide--show">
                <h2>Des milliers de développeurs ont trouver leur premier emploi ici</h2>
                <Slide />
            </div>






        </div>
    );
};

export default Home;