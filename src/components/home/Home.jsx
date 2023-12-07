import React, { useState, useEffect, useRef  } from "react";
import { useSelector, useDispatch }   from "react-redux";
import { selectAllEvents, getAllEvents } from "../../redux/slices/eventSlice";

import Modal        from "../menu/Modal";
import LoginModal   from "../auth/modalAuth";
import Subscription from "../Subscription";
import EventHomeL   from "./EventHomeL";
import EventHomeR   from "./EventHomeR";
import InfoHome     from "./InfoHome";
import Line         from "../common/Line"

import "./styles/Home.css";

function Home() {
    const dispatch = useDispatch()
    const events   = useSelector(selectAllEvents);
    const mounted  = useRef(false);

    useEffect(() => {
        if (!mounted.current) {
            mounted.current = true;
            dispatch(getAllEvents());
        }
    }, [dispatch]);

    return (
        <div id="home-container">
            <InfoHome/>
        
            {events.map((event, i) => i%2===0 ? 
                (<EventHomeL eventObj={event}/>) : 
                (<EventHomeR eventObj={event}/>))}

            <Line />
            <Subscription />
            <Modal />
        </div>
    );
}

export default Home;
