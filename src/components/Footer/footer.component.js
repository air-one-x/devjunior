import React from 'react';
import './footer.style.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';

const Footer = () => {

    return (
        <footer className="row">

            <div className="footer--part1 col-lg-6">
                <h2>Les développeurs juniors ont du talent ici.</h2>
                <span>@devjunior</span>
            </div>

            <div className="footer--part2 col-lg-6">
                <h3>Contact</h3>
                <ul>
                    <li>Téléphone: +000 000 000</li>
                    <li>Mail: devjunior@gg.com</li>
                </ul>
            </div>

            <div className="footer--part3 col-lg-6">
                <p>Devjunior, un site internet crée par un développeur junior qui créé du lien entre les entreprises et les développeurs à la recherche de l'entreprise où ils seront heureux</p>
            </div>

            <div className="footer--part4 col-lg-6">
                <ul>
                    <li><FacebookIcon /></li>
                    <li><TwitterIcon /></li>
                    <li><InstagramIcon /></li>
                    <li><GitHubIcon /></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;