import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Subscription from "./Subscription";
import "./styles/Event.css";
import { useDispatch } from "react-redux";
import ReactLoading from "react-loading";
import { getEventById } from "../redux/slices/eventSlice";

function Event() {
  const [event, setEvent] = useState(null);
  const dispatch = useDispatch();
  const params = useParams();
  useEffect(() => {
    dispatch(getEventById(params.id))
      .then((response) => {
        const data = response.payload.event;

        setEvent(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return event ? (
    <>
      <div className="row ">
        <div className="col-md-5 p-5 image-container">
          <img
            className="ceramicPhoto"
            alt="foto"
            src={require("./img/ceramic.jpeg")}
          />
        </div>

        <div className="col-md-7 p-4 event text-start themeColor">
          <div className="row innerEvent">
            <h2>{event.title}</h2>
          </div>

          <hr className="lineEvent p-2" />
          <div className="row d-flex ">
            <h5 className="bold col-3 innerEvent d-flex align-items-start">
              When
            </h5>
            <h5 className="col-9 d-flex align-items-start">{event.dateTime}</h5>
          </div>

          <div className="row d-flex ">
            <h5 className="bold col-3 innerEvent d-flex align-items-start">
              Where
            </h5>
            <h5 className="col-9 d-flex align-items-start">{event.location}</h5>
          </div>

          <div className="row d-flex ">
            <h5 className="bold col-3 innerEvent d-flex align-items-start">
              Host
            </h5>
            <h5 className="col-9 d-flex align-items-start">{event.host}</h5>
          </div>
          <hr className="lineEvent p-2" />
          <div className="row">
            <h5>{event.fullDescription}</h5>
          </div>
        </div>
        <hr className="m-4" />
        <Subscription />
      </div>
    </>
  ) : (
    <div className="d-flex justify-content-center align-items-center f">
      {" "}
      <ReactLoading
        className="m-2 p-5"
        type={"bubbles"}
        color={"#B28484"}
        height={"25%"}
        width={"20%"}
      />
    </div>
  );
}

export default Event;
