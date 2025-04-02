import React from "react";
import imgTest from '../assets/imgTest.png';

export default function Header() {

    return <div>
        <div className="row">
            <div className="column left">
                <div className="CardImg">
                    <img src={imgTest} alt="imgTest"/>
                </div>
            </div>
            <div className="column right">

                <div className="name">
                    <p>Romain Poulain</p>
                </div>
                <div className="titre">
                    <h1>Bienvenue sur mon Profolio</h1>
                    <h2>Découvrez mes Projets.</h2>
                    <p>Our kinder garden school provides a nurturing and stimulating environment,
                        fostering a love for learning that lasts a lifetime. Join us as we embark on an
                        exciting educational journey together!
                    </p>
                </div>
                <div className="blockchiffre">
                    <p>+20 <span>Projets Réalisés</span></p>
                    <p>+13 <span>Technologies Maîtrisées</span></p>
                    <p>+4 <span>Années d'Expérience</span></p>
                </div>
            </div>
        </div>
    </div>
}