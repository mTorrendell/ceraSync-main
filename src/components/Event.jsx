import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Subscription from "./Subscription";
import { base64ToImage } from "../util/ImageConverter.js";

import "./styles/Event.css";
import { useDispatch } from "react-redux";
import ReactLoading from "react-loading";
import { getEventById } from "../redux/slices/eventSlice";
import { formatDateTime } from "../util/TimeConverter";
import Header from "../components/common/HeaderHome.jsx";

function Event() {
  const [event, setEvent] = useState(null);
  const [imageConverted, setImageConverted] = useState(null);
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

  useEffect(() => {
    const loadImage = async () => {
      try {
        const img = await base64ToImage(event.imageData);
        setImageConverted(img);
      } catch (error) {
        console.error("Error loading image:", error);
      }
    };
    loadImage();
  }, [event]);

  return event && imageConverted ? (
    <>
      <Header />
      <img
        className="event_background"
        src={imageConverted.src}
        alt="aboutImage"
      />
      <div className="row d-flex justify-content-center">
        <div className="col-6 p-5 event ev">
          <div className="row innerEvent">
            <h2>{event.title}</h2>
          </div>

          <hr className="lineEvent p-2" />
          <div className="row d-flex ">
            <h5 className="bold col-3 innerEvent d-flex align-items-start">
              When
            </h5>
            <h5 className="col-9 d-flex align-items-start">
              {formatDateTime(event.dateTime)}
            </h5>
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
        {/* <Subscription /> */}
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

export default Event;
