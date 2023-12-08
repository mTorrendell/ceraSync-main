import React, { useState, useEffect } from "react";
import "./styles/EventHomeL.css";

import Line from "../common/Line";
import { base64ToImage } from "../../util/ImageConverter";
import { Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

const theme = createTheme({
  palette: {
    coral: {
      main: "#C4989D",
      light: "#F2BDC3",
      dark: "#917175",
      contrastText: "#4F3E40",
    },
  },
});

function EventHomeL({ eventObj }) {
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
    <div id="event_container_l">
      <div id="event_info_container_l" className="themeColor">
        <div className="event_text_container_l">
          <h2 id="short_description">{eventObj.shorDescription}</h2>
        </div>

        <Line />
        <div className="event_text_container_l">
          <h1 id="title">{eventObj.title}</h1>
        </div>
        <Line />

        <div className="two_in_row_l">
          <div className="when-where_container_l">
            <h5 className="bold when-where">Where</h5>
          </div>
          <div className="meta_data_container_l">
            <h5 className="meta_data">{eventObj.location}</h5>
          </div>
        </div>

        <div className="two_in_row_l">
          <div className="when-where_container_l">
            <h5 className="bold when-where">When</h5>
          </div>
          <div className="meta_data_container_l">
            <h5 className="meta_data">{eventObj.dateTime}</h5>
          </div>
        </div>

        <div className="event_text_container_l">
          <ThemeProvider theme={theme}>
            <Button
              size="large"
              color="coral"
              variant="contained"
              onClick={() => {
                navigate(`/event/${eventObj.id}`);
              }}
            >
              {" "}
              <div className="text_button">Check it out</div>
            </Button>
          </ThemeProvider>
        </div>
      </div>

      <div id="event_image_container_l">
        {imageConverted && (
          <img id="event_image" src={imageConverted.src} alt="Event" />
        )}
      </div>
    </div>
  );
}

export default EventHomeL;
