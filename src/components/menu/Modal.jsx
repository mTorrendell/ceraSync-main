import React, { useState } from "react";
import ModalButton from "./ModalButton";
import "./styles/About.css";
import "./ModalButton"; 

import { Link } from "react-router-dom";


const Modal = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal  = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  
  const menu = () => { 
    return (
      <div className="modal-overlay" onClick={closeModal}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <span className="close-button" onClick={closeModal}>
              &times;
          </span>

            <div>        
              <h2>MENU CONTENT</h2>
              <Link className="link" to="/">
                <h1 className="title-header mt-3">HOME</h1>
              </Link>
              <Link className="link" to="/">
                <h1 className="title-header mt-3">CREATE EVENT</h1>
              </Link>
              <Link className="link" to="/about">
                <h1 className="title-header mt-3">ABOUT</h1>
              </Link>
            </div>

          </div>
      </div>
    )
  }

  const menuController = () => isModalOpen ? menu() : null;
  
  return ( 
    <>
      <ModalButton openModal={openModal}/>
      {menuController()}  
    </>   
  )
};

export default Modal;
