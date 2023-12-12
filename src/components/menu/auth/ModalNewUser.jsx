import React, { useState } from "react";
import "../styles/About.css";
import "../styles/ModalAuth.css";
import { useDispatch } from "react-redux";
import { register } from "../../../redux/slices/authSlice";
import WestIcon from "@mui/icons-material/West";
import { useNavigate } from "react-router-dom";

const ModalNewUser = ({ openNewuser, email }) => {
  const [isModalOpen, setIsModalOpen] = useState(openNewuser);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirm, setConfirm] = useState(true);
  const [emailEmpty, setEmailEmpty] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleFirstPassword = (event) => {
    setNewPassword(event.target.value);
  };

  const handleSecondPassword = (event) => {
    setConfirmPassword(event.target.value);
  };

  const setClose = () => {
    setIsModalOpen(false);
  };

  const verification = async () => {
    if (confirmPassword === newPassword) {
      if (newPassword.length > 0) {
        let res = "";
        const obj = {
          email: email,
          password: newPassword,
        };
        try {
          res = await dispatch(register(obj));
          if (res.payload.token) {
            navigate("/about");
            setEmailEmpty(false);
          } else {
          }
        } catch (e) {
          setEmailEmpty(true);
        }
      } else {
        setEmailEmpty(true);
      }
    } else {
      setConfirm(false);
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
            <h6 className="project-modal titleCera p-2 ">CERA SYNC</h6>
          </div>
          <div className="cont col-12 d-flex align-items-center">
            <h4 className="p-1">Create an account </h4>
            <h2>Welcome!</h2>
            <h3>{email}</h3>
            <input
              required
              type="password"
              className="col-12 form-control"
              id="input"
              aria-label="Default"
              placeholder="Create password"
              aria-describedby="inputGroup-sizing-default"
              value={newPassword}
              onChange={handleFirstPassword}
            />
            <input
              required
              type="password"
              className="col-12 form-control"
              id="input"
              aria-label="Default"
              placeholder="Specify password"
              aria-describedby="inputGroup-sizing-default"
              value={confirmPassword}
              onChange={handleSecondPassword}
            />
          </div>
          <div className="col-12 button" onClick={verification}>
            Register
          </div>
          {emailEmpty && <p>Please specify password</p>}
          {!confirm && <p>Passwords are not the same</p>}
        </div>
      </div>
    </>
  ) : (
    <></>
  );
};

export default ModalNewUser;
