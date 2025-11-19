import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectAllEvents, getAllEvents } from "../../redux/slices/eventSlice";

import Modal        from "../menu/Modal";
import Subscription from "../Subscription";
import EventHomeL   from "./EventHomeL";
import EventHomeR   from "./EventHomeR";
import InfoHome     from "./InfoHome";
import Line         from "../common/Line";
import ReactLoading from "react-loading";
import HeaderHome   from "../common/HeaderHome";

import "./styles/Home.css";

function Home() {
  const dispatch = useDispatch();
  const events = useSelector(selectAllEvents);
  const mounted = useRef(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      dispatch(getAllEvents()).finally(() => setIsLoading(false));
    }
  }, [dispatch]);

  const home = () => {
    return (
      <>
        <HeaderHome />
        <div id="home-container">
          <InfoHome />

          {events.length > 0 ? (
            events.map((event, i) =>
              i % 2 === 0 ? (
                <EventHomeL key={i} eventObj={event} />
              ) : (
                <EventHomeR key={i} eventObj={event} />
              )
            )
          ) : (
            <div className="text-center p-5 m-5">
              <h2 className="themeColor">No events yet!</h2>
              <h4 className="themeColor">Be the first to create one.</h4>
            </div>
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

  return isLoading ? loading() : home();
}

export default Home;