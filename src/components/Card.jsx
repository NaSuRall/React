import { FaStar } from "react-icons/fa";
import React from "react";

export default function Card({ title, description, backgroundColor, iconClass }) {
    return (
        <div className="card" style={{ backgroundColor }}>
            <div className="icon-container">
                <i className={iconClass}></i>
            </div>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
}