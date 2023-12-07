import React, { useState } from "react";
import ModalButton from "./ModalButton";
import "./styles/About.css";
import "./ModalButton";
import LoginModal from "../auth/modalAuth";

import { Link, useParams } from "react-router-dom";

const Modal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const login = () => {
    if (!loginOpen) {
      setIsModalOpen(false);
      setLoginOpen(true);
    } else {
      setIsModalOpen(true);
      setLoginOpen(true);
    }
  };

  const menu = () => {
    return (
      <div className="modal-overlay" onClick={closeModal}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <span className="close-button" onClick={closeModal}>
            &times;
          </span>

          <div>
            <h6 className="project-modal">CERA SYNC</h6>
            <Link className="link" to="/">
              <h1 className="title-header-modal title-header mt-3">HOME</h1>
            </Link>
            <Link className="link" to="/create">
              <h1 className="title-header-modal title-header mt-3">CREATE EVENT</h1>
            </Link>
            <Link className="link" to="/about">
              <h1 className="title-header-modal title-header mt-3">ABOUT US</h1>
            </Link>

            <h1 className="title-header-modal mt-3 title-header" onClick={login}>
              LOGIN
            </h1>
          </div>
        </div>
        <LoginModal open={loginOpen} />
      </div>
    );
  };

  const menuController = () => (isModalOpen ? menu() : null);

  return (
    <>
      <ModalButton openModal={openModal} />
      {menuController()}
    </>
  );
};

export default Modal;
