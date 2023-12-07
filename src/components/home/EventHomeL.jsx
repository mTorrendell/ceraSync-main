import React, { useState } from "react";
import "./styles/EventHomeL.css";
import image from "../img/ceramic.jpeg"
import image2 from "../img/ceramic event.jpeg"
import Line from "../common/Line"

import { Button } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
      coral: {
        main: '#C4989D',
        light: '#F2BDC3',
        dark: '#917175',
        contrastText: '#4F3E40',
      },
    },
  });

function EventHomeL() {
    return (      

      
    <div id="event_container_l">

      <div id="event_info_container_l" className="themeColor">

        <div className="event_text_container">
            <h2 id="short_description">
                Have you ever questioned what to do with burned ceramics?
            </h2>
        </div>

        
        <Line/>
          <div className="event_text_container">
            <h1 id="title" >Educational Event on how to recycle ceramics</h1>
          </div>
        <Line/>

        <div className="two_in_row">
          <div className="event_text_container">
            <h5 className="bold when-where">Where</h5>
          </div>
          <div className="event_text_container">
            <h5 className="meta_data">Lohmühlenstraße 65, 12435 Berlin</h5>
          </div>
        </div>

        <div className="two_in_row">
          <div className="event_text_container">
            <h5 className="bold when-where">When</h5>
          </div>
          <div className="event_text_container">
            <h5 className="meta_data">Friday, December 15, 11AM - 16PM</h5>
          </div>
        </div>
      
        <div className="event_text_container">
            <ThemeProvider theme={theme}>
                <Button size="large" 
                        color="coral"
                        variant="contained"
                > <div className="text_button">Check it out</div></Button>
            </ThemeProvider>
        </div>

      </div>

      <div id="event_image_container_l" >
        <img id="event_image" src={image2} />
      </div>

    </div>
  )
}

export default EventHomeL;