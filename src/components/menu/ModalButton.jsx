import React from "react";
import "./styles/ModalButton.css";
import logo from "../img/Logo.svg";

const ModalButton = ({ openModal }) => {

    return (
        <div id="logo_container" >
            <canvas id="canvas" onClick={openModal} ></canvas>
            <object id="logoimg" type="image/svg+xml" data={logo}>
                Your browser does not support svg
            </object>
        </div>
    )
}

export default ModalButton;