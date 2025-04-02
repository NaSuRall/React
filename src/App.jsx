import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Post from "./Post.jsx";
import "./style.css";
import "./color.css";
import {Header} from "./components/Header.jsx";

function App() {
    return (
        <div>
          <div className="container">
                <Header />
          </div>
        </div>
    );
}

export default App;
