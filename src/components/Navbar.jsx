import { Link } from "react-router-dom";
import "../pages/Nav.css"
function Navbar() {
    return (
        <nav className="navbar">
            <Link to="/">Portfolio</Link>
            <div className="Onglets">
                <Link to="/about">À Propos</Link>
                <Link to="/projects">Projets</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </nav>
    );
}

export default Navbar;
