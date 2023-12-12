import React, { useState } from "react";

import { useDispatch }   from "react-redux";
import { addEvent }      from "../redux/slices/eventSlice";
import { imageToBase64 } from "../util/ImageConverter";
import { TextField }     from "@mui/material";

import InputFileUpload   from "./common/InputFileUpload";
import CSButton          from "./common/CSButton";

import "./styles/Event.css";
import "./styles/CreateEvent.css";

import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';

import { isTitleValid, 
         isLocationValid,
         isHostValid,
         isDateValid,
         isTimeValid,
         isShortDescValid,
         isFullDescValid } from "../util/FormValidators";

const customTheme = (outerTheme) =>
  createTheme({
    palette: {
      mode: outerTheme.palette.mode,
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            '--TextField-brandBorderColor': "#C4989D",
            '--TextField-brandBorderHoverColor': "#F2BDC3",
            '--TextField-brandBorderFocusedColor': "#917175",
            '& label.Mui-focused': {
              color: 'var(--TextField-brandBorderFocusedColor)',
            },
          },
        },
      },
      MuiFilledInput: {
        styleOverrides: {
          root: {
            '&:before, &:after': {
              borderBottom: '4px solid var(--TextField-brandBorderColor)',
            },
            '&:hover:not(.Mui-disabled, .Mui-error):before': {
              borderBottom: '4px solid var(--TextField-brandBorderHoverColor)',
            },
            '&.Mui-focused:after': {
              borderBottom: '4px solid var(--TextField-brandBorderFocusedColor)',
            },
          },
        },
      },
    },
  });

function Event() {
  const [event, setEvent]   = useState({
    title: '', 
    location: '',
    dateTime: '',
    host: '',
    shortDesc: '', 
    fullDesc: '',
    imageData: ''
  });
  const [b64str, setB64str] = useState(null);
  const [date, setDate]     = useState('');
  const [time, setTime]     = useState('');

  const dispatch = useDispatch();
  const outerTheme = useTheme();

  const formatDateTime = () => {
    if (date && time) {
        const [d, m, y] = date.split('/');
        const [h, min]  = time.split(':');

        return new Date(y, m-1, d, h, min).toISOString().slice(0, 19).replace('T', ' ')
    }
  }

  const handleFileChange = async (event) => {
    try {
        const file = event.target.files[0];
        if (file) {
            const base64String = await imageToBase64(file);
            setB64str(base64String);
        }
    } catch (error) {
        console.error("Error handling file change:", error);
    }
  };

  const handleSubmit = async () => {
    event.dateTime  = formatDateTime();
    event.imageData = b64str;
    try {
        console.log(event);
        dispatch(addEvent(event));
    } catch {
        console.error("error");
    }
  };

  const handleInputChange = (propName) => (e) => {
        setEvent((curr) => ({
            ...curr,
            [propName]: e.target.value,
        }))
  }

  return (
    <>
      <div className="initial-container-info container">

        <form className="newProductForm">

          <div className="center submit-container">

            <h1 className="nTitle ">SUBMIT YOUR EVENT</h1>

            <ThemeProvider theme={customTheme(outerTheme)}>

            <div className="input-container">
                <TextField
                    className="event-text-field"
                    required
                    fullWidth
                    label='Title'
                    variant="filled"
                    error={!isTitleValid(event.title)}
                    onChange={handleInputChange('title')}
                />
            </div>

            <div className="input-container">
                <TextField
                    className="event-text-field"
                    required
                    fullWidth
                    label='Location'
                    variant="filled"
                    error={!isLocationValid(event.location)}
                    onChange={handleInputChange('location')}
                />
            </div>

            <div className="input-container">      
                <div className="dateTime-container">
                    <div className="date-container">
                        <TextField
                            className="event-text-field"
                            required
                            fullWidth
                            label='Date'
                            variant="filled"
                            placeholder="DD/MM/YYYY"
                            error={!isDateValid(date)}
                            onChange={(e) => setDate(e.target.value)}
                        />
                    </div>
                    <div className="time-container">
                        <TextField
                            className="event-text-field"
                            required
                            fullWidth
                            label='Time'
                            variant="filled"
                            placeholder="HH:MM"
                            error={!isTimeValid(time)}
                            onChange={(e) => setTime(e.target.value)}
                        />
                    </div>
                </div>
            </div>

            <div className="input-container">
                <TextField
                    className="event-text-field"
                    required
                    fullWidth
                    label='Host'
                    variant="filled"
                    error={!isHostValid(event.host)}
                    onChange={handleInputChange('host')}
                />
            </div>

            <div className="input-container">
                <TextField
                    className="event-text-field"
                    required
                    multiline
                    fullWidth
                    label='Short Overview'
                    variant="filled"
                    error={!isShortDescValid(event.shortDesc)}
                    onChange={handleInputChange('shortDesc')}
                />
            </div>

            <div className="input-container">  
                <TextField
                    className="event-text-field"
                    required
                    multiline
                    fullWidth
                    label='Description'
                    variant="filled"
                    error={!isFullDescValid(event.fullDesc)}
                    onChange={handleInputChange('fullDesc')}
                />
            </div>
            </ThemeProvider>

            <div className="input-container">
                <InputFileUpload onChange={handleFileChange}/>
            </div>

            <div className="input-container">
                <CSButton 
                    text="Create" 
                    onClick={(e) => {
                            e.preventDefault();
                            handleSubmit();
                        }
                    }
                />
            </div>

          </div>
        </form>
      </div>
    </>
  );
}

export default Event;
