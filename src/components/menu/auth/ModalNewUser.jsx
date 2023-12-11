import React, { useState } from "react";
import "../styles/About.css";
import "../styles/ModalAuth.css";
import { useDispatch } from "react-redux";
import { checkEmail } from "../../../redux/slices/authSlice";
import WestIcon from "@mui/icons-material/West";

const ModalNewUser = ({ openNewuser, email }) => {
  const [isModalOpen, setIsModalOpen] = useState(openNewuser);
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const setClose = () => {
    setIsModalOpen(false);
  };

  const verification = async () => {};

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
            <h4 className="p-1">Create an account </h4>
            <h2>Welcome!</h2>
            <h3>{email}</h3>
            <input
              required
              type="text"
              className="col-12 form-control"
              id="input"
              aria-label="Default"
              placeholder="Create password"
              aria-describedby="inputGroup-sizing-default"
              value={inputValue}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-12 button" onClick={verification}>
            Continue
          </div>
        </div>
      </div>
    </>
  ) : (
    <></>
  );
};

export default ModalNewUser;
