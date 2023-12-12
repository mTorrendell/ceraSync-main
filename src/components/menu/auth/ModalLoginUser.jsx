import React, { useState, useEffect } from "react";
import "../styles/About.css";
import "../styles/ModalAuth.css";
import { useDispatch } from "react-redux";
import WestIcon from "@mui/icons-material/West";
import { authenticate } from "../../../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";

const ModalUser = ({ openUser, email }) => {
  const [isModalOpen, setIsModalOpen] = useState(openUser);
  const [password, setPassword] = useState("");
  const [alterPassword, setAlterPassword] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const setClose = () => {
    setIsModalOpen(false);
  };

  const handleInputChange = (event) => {
    setPassword(event.target.value);
  };

  const verifyPassword = async () => {
    let res = "";
    const obj = {
      email: email,
      password: password,
    };

    try {
      res = await dispatch(authenticate(obj));
      if (res.payload.token) {
        navigate("/about");
        // window.location.reload();
        // navigate("/");
        setAlterPassword(false);
      }
    } catch (e) {
      setAlterPassword(true);
    }
  };

  useEffect(() => {}, []);

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
              value={password}
              onChange={handleInputChange}
            />{" "}
          </div>

          <div className="col-12 button" onClick={verifyPassword}>
            Log In
          </div>
          {alterPassword && <p>Incorrect password</p>}
        </div>
      </div>
    </>
  ) : (
    <></>
  );
};

export default ModalUser;
