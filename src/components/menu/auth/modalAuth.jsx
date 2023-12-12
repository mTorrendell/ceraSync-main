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
  const [email, setEmail] = useState("");
  const [validateEmail, setValidateEmail] = useState(false);
  const [validateExist, setValidateExist] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);

  const dispatch = useDispatch();

  const setClose = () => {
    setIsModalOpen(false);
    setIsEmailValid(false);
  };

  const handleInputChange = (event) => {
    setEmail(event.target.value);
  };

  const verification = async (e) => {
    //restarting states
    setValidateExist(false);
    setValidateEmail(false);
    let res = "";

    //creating the object
    const obj = {
      email: email,
    };
    try {
      res = await dispatch(checkEmail(obj));
    } catch {
      console.error("error");
    }
    if (email && res.length !== 0) {
      if (res.payload.isExists) {
        setValidateExist(false);
        setValidateEmail(true);
      } else if (!res.payload.isExists) {
        setValidateExist(true);
        setValidateEmail(false);
      }
    } else {
      setIsEmailValid(true);
    }
  };

  useEffect(() => {
    setIsModalOpen(false);
    setIsModalOpen(true);
  }, []);

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
              value={email}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-12 button" onClick={verification}>
            Continue
          </div>
          {isEmailValid && <p>Please specify email</p>}
        </div>
      </div>
      {validateEmail ? (
        <LoginUser openUser={validateEmail} email={email} />
      ) : (
        <></>
      )}
      {validateExist ? (
        <LoginNewUser openNewuser={validateExist} email={email} />
      ) : (
        <></>
      )}
    </>
  ) : (
    <></>
  );
};

export default ModalAuth;
