import React from "react";

import "./styles/InfoHome.css";
import Line from "../common/Line";



function InfoHome() {
    return (
    <div className="info-home-container">

        <h4 className="short_description">
            CERAMIC EVENT PLATFORM 
        </h4>

        <Line/>
        
        <h2 className="center title">
          Discover ceramic events, workshops and serene artistry
        </h2>
        
        <Line/>
        
    </div>
    )
}

export default InfoHome;