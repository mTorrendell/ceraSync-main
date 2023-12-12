import React, { useRef, useEffect } from "react";

import "./styles/InfoHome.css";
import Line from "../common/Line";

function InfoHome() {
  const videoRef = useRef(null);

  useEffect(() => {
    const playVideo = () => {
      if (videoRef.current) {
        videoRef.current.play().catch((error) => {
          console.error("Error playing video:", error);
        });
      }
    };

    playVideo();
  }, []);

  return (
    <div className="info-home-container">
      <video ref={videoRef} loop muted className="background-video">
        <source
          src={process.env.PUBLIC_URL + "/Pottery1.mp4"}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <h4 className="short_description">CERAMIC EVENT PLATFORM</h4>

      <hr className="lin" />

      <h2 className="center title principalTitle">
        Discover ceramic events, workshops and serene artistry
      </h2>

      <hr className="lin" />
    </div>
  );
}

export default InfoHome;
