import React, { useState, useEffect } from "react";
import ModalButton from "./ModalButton";
import "./styles/About.css";
import "./ModalButton";
import LoginModal from "./auth/modalAuth";
import { selectIsLogged } from "../../redux/slices/authSlice";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Modal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const isLogged = useSelector(selectIsLogged);

  const login = () => {
    if (!loginOpen) {
      setLoginOpen(true);
    } else {
      setLoginOpen(false);
    }
  };

  const closeAll = () => {
    login();
    closeModal();
  };

  const menu = () => {
    return (
      <>
        <div className="modal-overlay" onClick={closeAll}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-button" onClick={closeAll}>
              &times;
            </span>
            <div>
              <h6 className="project-modal">CERA SYNC</h6>
              <Link className="link" to="/">
                <h1 className="title-header-modal title-header mt-3">HOME</h1>
              </Link>
              {isLogged && (
                <Link className="link" to="/create">
                  <h1 className="title-header-modal title-header mt-3">
                    CREATE EVENT
                  </h1>
                </Link>
              )}
              <Link className="link" to="/about">
                <h1 className="title-header-modal title-header mt-3">
                  ABOUT US
                </h1>
              </Link>
              {!isLogged ? (
                <h1
                  className="title-header-modal mt-3 title-header login"
                  onClick={login}
                >
                  LOGIN
                </h1>
              ) : (
                <>
                  <Link className="link" to="/profile">
                    {" "}
                    <h1 className="title-header-modal mt-3 title-header login">
                      PROFILE
                    </h1>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>

        {loginOpen ? <LoginModal open={loginOpen} /> : <></>}
      </>
    );
  };

  const menuController = () => (isModalOpen ? menu() : null);

  return (
    <>
      {<ModalButton openModal={openModal} />}
      {menuController()}
    </>
  );
};

export default Modal;
