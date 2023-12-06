import React, { useState } from "react";
import ModalButton from "../menu/ModalButton";
import "../styles/About.css";

import { Link } from "react-router-dom";

const ModalAuth = ({ open }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  console.log(open);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const login = () => {
    return open ? (
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
              <h1 className="title-header mt-3">ABOUT US</h1>
            </Link>
            <Link className="link" to="/about">
              <h1 className="title-header mt-3">LOGIN</h1>
            </Link>
          </div>
        </div>
      </div>
    ) : (
      <></>
    );
  };

  const loginController = () => (isModalOpen ? login() : null);

  return (
    <>
      <ModalButton openModal={openModal} />
      {loginController()}
    </>
  );
};

export default ModalAuth;
