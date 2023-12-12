import React, { useEffect, useState } from "react";
import "./styles/About.css";
import { useDispatch, useSelector } from "react-redux";
import { setCurrEmail } from "../redux/slices/authSlice";
import { setIsLogged } from "../redux/slices/authSlice";

function ProfileUser() {
  const [profile, setProfile] = useState("f");
  const isLogged = useSelector(setCurrEmail);
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(setIsLogged(false));
    localStorage.removeItem("CERASYNC_JWT_TOKEN", "");
  };

  useEffect(() => {
    setProfile(isLogged.payload.auth.currEmail);
  }, [0]);

  return (
    <>
      <div className="row ">
        <div className="col-md-7 p-4 m-2 event text-start themeColor">
          <div className="row innerEvent">
            <h2 className="m-1 mb-5">Welcome to your profile</h2>
          </div>
          <div className="row d-flex ">
            <h5 className="bold col-3 innerEvent d-flex align-items-start">
              Email:
            </h5>
            <h5 className="col-9 d-flex align-items-start">{profile}</h5>
          </div>

          <div className="row d-flex ">
            <h5 className="bold col-3 innerEvent d-flex align-items-start">
              Number of Events:
            </h5>
            <h5 className="col-9 d-flex align-items-start">10</h5>
          </div>
        </div>
        <div className="col-md-5 p-5 image-container">
          <h4 className="" onClick={logOut}>
            LOGOUT
          </h4>
        </div>
      </div>
    </>
  );
}

export default ProfileUser;
