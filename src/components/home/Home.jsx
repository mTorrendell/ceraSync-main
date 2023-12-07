import React, { useState } from "react";
import Modal from "../menu/Modal";
import LoginModal from "../auth/modalAuth";
import Subscription from "../Subscription";
import "./styles/Home.css";
import EventHomeL from "./EventHomeL";
import EventHomeR from "./EventHomeR";
import InfoHome from "./InfoHome";
import Line from "../common/Line"

function Home() {
  return (
    <div id="home-container">
        <InfoHome/>

        <EventHomeL />
        <EventHomeR />

        <Line />
        <Subscription />
        <Modal />
    </div>
  );
}

export default Home;
