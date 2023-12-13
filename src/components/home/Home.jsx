import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectAllEvents, getAllEvents } from "../../redux/slices/eventSlice";

import Modal from "../menu/Modal";
import LoginModal from "../menu/auth/modalAuth";
import Subscription from "../Subscription";
import EventHomeL from "./EventHomeL";
import EventHomeR from "./EventHomeR";
import InfoHome from "./InfoHome";
import Line from "../common/Line";
import ReactLoading from "react-loading";
import HeaderHome from "../common/HeaderHome";

import "./styles/Home.css";

function Home() {
  const dispatch = useDispatch();
  const events = useSelector(selectAllEvents);
  const mounted = useRef(false);

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      dispatch(getAllEvents());
    }
  }, [dispatch]);

  const home = () => {
    return (
      <>
        <HeaderHome />
        <div id="home-container">
          <InfoHome />

          {events.map((event, i) =>
            i % 2 === 0 ? (
              <EventHomeL key={i} eventObj={event} />
            ) : (
              <EventHomeR key={i} eventObj={event} />
            )
          )}
          <Line />
          <Subscription />
          <Modal />
        </div>
      </>
    );
  };

  const loading = () => {
    return (
      <div className="d-flex justify-content-center align-items-center f">
        {" "}
        <ReactLoading
          className="m-2 p-5 over"
          type={"bubbles"}
          color={"#B28484"}
          height={"25%"}
          width={"20%"}
        />
      </div>
    );
  };

  return events.length !== 0 ? home() : loading();
}

export default Home;
