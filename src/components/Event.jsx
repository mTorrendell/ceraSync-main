import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Subscription from "./Subscription";
import { base64ToImage } from "../util/ImageConverter.js";

import "./styles/Event.css";
import { useDispatch } from "react-redux";
import ReactLoading from "react-loading";
import { getEventById } from "../redux/slices/eventSlice";
import { formatDateTime } from "../util/TimeConverter";
import Header from "../components/common/Header.jsx"


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

  return event ? (
    <>
      <Header />
      <div className="row ">
        <div className="col-md-5 p-5 image-container">
          <div>
            {imageConverted ? (
              <img
                className="ceramicPhoto"
                src={imageConverted.src}
                alt="Event"
              />
            ) : (
              <ReactLoading
                className="m-2 p-5"
                type={"bubbles"}
                color={"#B28484"}
                height={"10%"}
                width={"10%"}
              />
            )}
          </div>
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
        <Subscription />
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
