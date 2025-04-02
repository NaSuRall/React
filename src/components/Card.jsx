import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Card({ title, description, backgroundColor }) {
    return (
        <div className="card" style={{ backgroundColor }}>
            <div className="icon-container">
               X
            </div>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
}