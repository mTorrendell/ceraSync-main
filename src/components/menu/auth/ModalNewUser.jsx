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
  const [emailEmpty, setEmailEmpty] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setNewPassword(event.target.value);
  };

  const setClose = () => {
    setIsModalOpen(false);
  };

  const verification = async () => {
    if (newPassword.length > 0) {
      let res = "";
      const obj = {
        email: email,
        password: newPassword,
      };

      try {
        res = await dispatch(register(obj));
        if (res.payload.token) {
          //  window.location.reload();
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
              onChange={handleInputChange}
            />
          </div>
          <div className="col-12 button" onClick={verification}>
            Register
          </div>
          {emailEmpty && <p>Please specify password</p>}
        </div>
      </div>
    </>
  ) : (
    <></>
  );
};

export default ModalNewUser;
