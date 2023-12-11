import React, { useState } from "react";
import "../styles/About.css";
import "../styles/ModalAuth.css";
import { useDispatch } from "react-redux";
import { checkEmail } from "../../../redux/slices/authSlice";
import WestIcon from "@mui/icons-material/West";

const ModalUser = ({ openUser, email }) => {
  const [isModalOpen, setIsModalOpen] = useState(openUser);
  const [inputValue, setInputValue] = useState("");
  // const [validateEmail, setValidateEmail] = useState(false);
  const dispatch = useDispatch();
  const setClose = () => {
    setIsModalOpen(false);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return isModalOpen ? (
    <>
      <div className="modal-overlay">
        <div className="modal-content auth d-flex align-items-center row">
          <div className="container-top col">
            <svg className="arrow left" onClick={setClose}>
              <WestIcon></WestIcon>
            </svg>
            <h6 className="project-modal titleCera p-2 ">CERA SYNC</h6>
          </div>
          <div className="cont col-12 d-flex align-items-center">
            <h2>Welcome back!</h2>
            <h4>{email}</h4>
            <input
              required
              type="password"
              className="col-12 form-control"
              id="input"
              aria-label="Default"
              placeholder="Password"
              aria-describedby="inputGroup-sizing-default"
              value={inputValue}
              onChange={handleInputChange}
            />{" "}
          </div>

          <div className="col-12 button">Log In</div>
        </div>
      </div>
    </>
  ) : (
    <></>
  );
};

export default ModalUser;
