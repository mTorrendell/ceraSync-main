import React, { useEffect, useState } from "react";
import "../styles/About.css";
import "../styles/ModalAuth.css";
import { useDispatch } from "react-redux";
import { checkEmail } from "../../../redux/slices/authSlice";
import LoginUser from "./ModalLoginUser";
import LoginNewUser from "./ModalNewUser";
import WestIcon from "@mui/icons-material/West";

const ModalAuth = ({ open }) => {
  const [isModalOpen, setIsModalOpen] = useState(open);
  const [inputValue, setInputValue] = useState("");
  const [validateEmail, setValidateEmail] = useState(false);
  const [validateExist, setValidateExist] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);

  const dispatch = useDispatch();

  const setClose = () => {
    setIsModalOpen(false);
    setIsEmailValid(false);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  //For when the call works
  const verificationtrue = async (e) => {
    let res = "";
    try {
      res = await dispatch(checkEmail(inputValue));
    } catch {
      console.error("error");
    }

    if (inputValue && res.length !== 0) {
      if (res.isExist) {
        setValidateExist(true);
        setValidateEmail(false);
      } else if (!res.isExist) {
        setValidateExist(false);
        setValidateEmail(true);
      }
    } else {
      setIsEmailValid(true);
    }
  };

  const verification = () => {
    if (inputValue) {
      console.log("ENTRO AL INPUT VALUE");
      if (!validateEmail) {
        // setValidateExist(true);
        setIsEmailValid(false);
        console.log("ENTRO AL VALIDATE EMAIL");

        setValidateEmail(true);
      } else {
        setValidateEmail(false);
        // setValidateExist(false);
      }
    } else {
      setIsEmailValid(true);
    }
  };

  return isModalOpen ? (
    <>
      <div className="modal-overlay">
        <div className="modal-content auth d-flex align-items-center row">
          <div className="container-top col">
            <svg className="arrow left" onClick={setClose}>
              <WestIcon></WestIcon>
            </svg>
            <h6 className="project-modal titleCeraFirst p-2 ">CERA SYNC</h6>
          </div>
          <div className="cont col-12 d-flex align-items-center">
            <h2>WELCOME</h2>
            <h5>Enter your email to log in or create an account</h5>
            <input
              required
              type="text"
              className="col-12 form-control"
              id="input"
              aria-label="Default"
              placeholder="Email adress"
              aria-describedby="inputGroup-sizing-default"
              value={inputValue}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-12 button" onClick={verificationtrue}>
            Continue
          </div>
          {isEmailValid && <p>Please specify email</p>}
        </div>
      </div>
      {validateEmail ? (
        <LoginUser openUser={validateEmail} email={inputValue} />
      ) : (
        <></>
      )}
      {validateExist ? (
        <LoginNewUser openNewuser={validateExist} email={inputValue} />
      ) : (
        <></>
      )}
    </>
  ) : (
    <></>
  );
};

export default ModalAuth;
