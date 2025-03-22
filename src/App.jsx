import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Post from "./Post.jsx";
import "./style.css";
import "./color.css";
import logo from "./img/LogoWhite.png";

function App() {
    return (
        <div>
            <div className="row">
                <div className="column left">
                    <div className="logo-home">
                        <img src={logo} alt="Logo" />
                    </div>
                    <div className="navigation-icon">
                        <ul>
                            <li><i className="fa-solid fa-house"></i></li>
                            <li><i className="fa-solid fa-user"></i></li>
                            <li><i className="fa-solid fa-calendar"></i></li>
                            <li><i className="fa-solid fa-comment"></i></li>
                            <li><i className="fa-solid fa-trash"></i></li>
                            <li><i className="fa-solid fa-chart-simple"></i></li>
                            <li><i className="fa-solid fa-moon"></i></li>
                        </ul>
                    </div>
                </div>
                <div className="column right">

                </div>
            </div>
        </div>
    );
}

export default App;
