export function Header() {

    return <div>
        <div className="row">
            <div className="column left">
                <div className="CardImg">
                    <img src="./public/assets/imgTest.png" alt=""/>
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
                    <p>+20 <span>Projets Réalises</span></p>
                    <p>+13 <span>Technologies Maitrisées</span></p>
                    <p>+4 <span>Années d'Experience</span></p>
                </div>
            </div>
        </div>
    </div>
}