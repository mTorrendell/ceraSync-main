import React, { useState } from "react";
import "./styles/About.css";

const Modal = ({ isOpen, onClose, children }) => {
   
  return isOpen ? (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close-button" onClick={onClose}>
          &times;
        </span>
        {children}
      </div>
    </div>
  ) : null;
};

export default Modal;
