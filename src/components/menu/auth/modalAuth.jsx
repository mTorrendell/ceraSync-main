import React, { useState } from "react";
import "../styles/About.css";
import "../styles/ModalAuth.css";

import { Link } from "react-router-dom";

const ModalAuth = ({ open }) => {
  const [isModalOpen, setIsModalOpen] = useState(open);
  const [inputValue, setInputValue] = useState("");

  const setClose = () => {
    setIsModalOpen(false);
  };

  const handleInputChange = (value) => {
    setInputValue(value);
  };

  return isModalOpen ? (
    <>
      <div className="modal-overlay">
        <div className="modal-content auth d-flex align-items-center row">
          <div className="container-top col">
            <i className="arrow left p-2 " onClick={setClose}>
              {"<"}
            </i>
            <h6 className="project-modal p-2 ">CERA SYNC</h6>
          </div>
          <div className="cont col-12 d-flex align-items-center">
            <h2>Welcome</h2>
            <h5>Enter your email to log in or create an account</h5>
            <input
              className="col-12 form-control"
              id="input"
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder={"E-mail adress"}
              aria-describedby="inputGroup-sizing-default"
            />
          </div>
          <div className="col-12 button">SUBSCRIBE</div>
        </div>
      </div>
    </>
  ) : (
    <></>
  );
};

export default ModalAuth;
