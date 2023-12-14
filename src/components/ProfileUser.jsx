import React, { useEffect, useState } from "react";
import "./styles/About.css";
import "./styles/Profile.css";
import { useDispatch, useSelector } from "react-redux";
import { setCurrEmail } from "../redux/slices/authSlice";
import { setIsLogged } from "../redux/slices/authSlice";
import Header from "../components/common/Header.jsx";
import { selectCurrId, setCurrId } from "../redux/slices/authSlice.js";
import { getEventsByOwnerId } from "../redux/slices/eventSlice.js";
import ReactLoading from "react-loading";
import { useNavigate } from "react-router-dom";

function ProfileUser() {
  const [profile, setProfile] = useState("");
  const [events, setEvents] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogged = useSelector(setCurrEmail);
  const id = useSelector(selectCurrId);

  const logOut = () => {
    dispatch(setIsLogged(false));
    dispatch(setCurrId(""));
    localStorage.removeItem("CERASYNC_JWT_TOKEN", "");
  };

  useEffect(() => {
    setProfile(isLogged.payload.auth.currEmail);
    dispatch(getEventsByOwnerId(id))
      .then((response) => {
        const data = response.payload.events;
        setEvents(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return events ? (
    <>
      <Header />
      <div className="row outer-container ">
        <div className="col-md-5 p-4 m-2 event text-start themeColor">
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
            <h5 className="col-9 d-flex align-items-start">{events.length}</h5>
          </div>
          <div className="col-md-5 img-cont">
            <h4 className="logout" onClick={logOut}>
              LOGOUT
            </h4>
          </div>
        </div>
        <div className="col-md-6 p-4 m-2 info-events ">
          {events.map((event, i) => (
            <>
              <div>
                <p className="pt-3">{i + 1}</p>
              </div>
              <div className="contianer-event">
                <div className="inner-info">
                  <div className="inner-inner-info">
                    <h5 className="p-1">Title: </h5>
                    <h5 className="p-1">Location: </h5>
                    <h5 className="p-1">Host: </h5>
                    <h5 className="p-1">Date: </h5>
                  </div>
                  <div>
                    <h5 className="p-1">{event.title}</h5>
                    <h5 className="p-1">{event.location}</h5>
                    <h5 className="p-1">{event.host}</h5>
                    <h5 className="p-1">{event.dateTime}</h5>
                  </div>
                </div>
                <div className="cont-button">
                  {" "}
                  <p
                    className="button-see"
                    onClick={() => navigate(`/event/${event.id}`)}
                  >
                    See more
                  </p>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  ) : (
    <div className="d-flex justify-content-center align-items-center f">
      {" "}
      <ReactLoading
        className="m-2 p-5 loading"
        type={"bubbles"}
        color={"#B28484"}
        height={"25%"}
        width={"20%"}
      />
    </div>
  );
}

export default ProfileUser;
