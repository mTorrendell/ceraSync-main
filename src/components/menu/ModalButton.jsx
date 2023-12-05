import React from "react";
import "./styles/About.css";

const ModalButton = ({ openModal }) => {

    return (
        <div className="logo" onClick={ openModal }>
            <img className="logo logoimg" src={require("../img/logo.png")} />
        </div>
    )
}

export default ModalButton;