import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Post from "./Post.jsx";
import "./style.css";
import "./color.css";
import Header from "./components/Header";
import Section from "./components/Section.jsx";
import { FaStar, FaHeart, FaRocket, FaApple, FaCar, FaLeaf } from "react-icons/fa";



function App() {
    return (
        <div>
          <div className="container">
                <Header />
                <Section
                    titleButton={"je ne sais pas "}
                    Title={"Pourquoi travailler avec moi ? "}
                    SubTitle={"Passionné de développement web et logiciel, j’ai acquis plusieurs compétences techniques et méthodologiques. Voici ce que je peux apporter à vos projets !"}

                    cards={[
                        { title: "Développement Full-Stack", description: "Maîtrise du back-end (Laravel, Node.js) et du front-end (React, Vue.js).", backgroundColor:"#F6FE78", iconClass:"fa-solid fa-star" },
                        { title: "Expérience en Projets Réels", description: "Développement d’applications et gestion de bases de données.", backgroundColor: "#FFBEE5" },
                        { title: "Code Sécurisé & Optimisé", description: "Bonnes pratiques en sécurité et performance.", backgroundColor: "#FF7373" },
                        { title: "Créativité & UI/UX", description: "Capacité à concevoir des interfaces ergonomiques et modernes.", backgroundColor: "#F99F72" },
                        { title: "Adaptabilité & Apprentissage Rapide", description: "Capable d’apprendre de nouvelles technologies selon les besoins.", backgroundColor: "#8A97FE" },
                        { title: "Travail en Équipe & Collaboration", description: "Méthodologies Agile, bonne communication en projet.", backgroundColor: "#FBFBFB" },

                    ]}
                />
          </div>
        </div>
    );
}

export default App;
