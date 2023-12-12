import React, { useState, useEffect } from "react";

import "./styles/EventHomeR.css";
import Line               from "../common/Line";
import CSButton           from "../common/CSButton";
import { base64ToImage }  from "../../util/ImageConverter";
import { useNavigate }    from "react-router-dom";
import { formatDateTime } from "../../util/TimeConverter";


function EventHomeR({ eventObj }) {
  const [imageConverted, setImageConverted] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loadImage = async () => {
      try {
        const img = await base64ToImage(eventObj.imageData);
        setImageConverted(img);
      } catch (error) {
        console.error("Error loading image:", error);
      }
    };
    loadImage();
  }, []);

  return (
    <div id="event_container_r">
      <div id="event_image_container_r">
        {imageConverted && (
          <img id="event_image" src={imageConverted.src} alt="Event" />
        )}
      </div>

      <div id="event_info_container_r" className="themeColor">
        <div className="event_text_container_r">
          <h2 id="short_description">{eventObj.shorDescription}</h2>
        </div>

        <Line />
        <div className="event_text_container_r">
          <h1 id="title">{eventObj.title}</h1>
        </div>
        <Line />

        <div className="two_in_row">
          <div className="two_in_row_text_container_r">
            <h5 className="bold when-where">Where</h5>
          </div>
          <div className="two_in_row_text_container_r">
            <h5 className="meta_data">{eventObj.location}</h5>
          </div>
        </div>
        <div className="two_in_row">
          <div className="two_in_row_text_container_r">
            <h5 className="bold when-where">When</h5>
          </div>
          <div className="two_in_row_text_container_r">
            <h5 className="meta_data">{formatDateTime(eventObj.dateTime)}</h5>
          </div>
        </div>
        <div className="event_text_container_r">
            <CSButton 
                text="Check it out" 
                onClick={() => navigate(`/event/${eventObj.id}`) }
            />
        </div>
      </div>
    </div>
  );
}

export default EventHomeR;
