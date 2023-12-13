import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import { 
    addEvent,
    selectIsError, 
    selectErrorMsg, 
    setErrorEvents
} from "../redux/slices/eventSlice";

import { imageToBase64 } from "../util/ImageConverter";
import { TextField } from "@mui/material";

import InputFileUpload from "./common/InputFileUpload";
import CSButton from "./common/CSButton";
import Header from "../components/common/Header.jsx";

import "./styles/Event.css";
import "./styles/CreateEvent.css";

import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";

import {
  isTitleValid,
  isLocationValid,
  isHostValid,
  isDateValid,
  isTimeValid,
  isShortDescValid,
  isFullDescValid,
  isFileValid,
} from "../util/FormValidators";

const customTheme = (outerTheme) =>
  createTheme({
    palette: {
      mode: outerTheme.palette.mode,
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            "--TextField-brandBorderColor": "#C4989D",
            "--TextField-brandBorderHoverColor": "#F2BDC3",
            "--TextField-brandBorderFocusedColor": "#917175",
            "& label.Mui-focused": {
              color: "var(--TextField-brandBorderFocusedColor)",
            },
          },
        },
      },
      MuiFilledInput: {
        styleOverrides: {
          root: {
            "&:before, &:after": {
              borderBottom: "4px solid var(--TextField-brandBorderColor)",
            },
            "&:hover:not(.Mui-disabled, .Mui-error):before": {
              borderBottom: "4px solid var(--TextField-brandBorderHoverColor)",
            },
            "&.Mui-focused:after": {
              borderBottom:
                "4px solid var(--TextField-brandBorderFocusedColor)",
            },
          },
        },
      },
    },
  });

function Event() {
  const [event, setEvent] = useState({
    title:     "",
    location:  "",
    dateTime:  "",
    host:      "",
    shortDesc: "",
    fullDesc:  "",
    imageData: "",
  });
  const [touchedF, setTouchedF] = useState({
    title:     false,
    location:  false,
    dateTime:  false,
    host:      false,
    shortDesc: false,
    fullDesc:  false,
    imageData: false,
  });
  const [isFormValid, setIsFormValid]         = useState(false);
  const [isFileValidBool, setIsFileValidBool] = useState(false);
  const [b64str, setB64str]                   = useState(null);
  const [date, setDate]                       = useState("");
  const [time, setTime]                       = useState("");

  const isError   = useSelector(selectIsError);
  const errorMsg  = useSelector(selectErrorMsg);

  const dispatch = useDispatch();
  const outerTheme = useTheme();
  const navigate   = useNavigate();

  const formatDateTime = () => {
    if (date && time) {
      const [d, m, y] = date.split("/");
      const [h, min]  = time.split(":");
      return new Date(y, m - 1, d, h, min).toISOString().slice(0, 19);
    }
  };

  const handleFileChange = async (event) => {
    try {
      const file = event.target.files[0];
      setIsFileValidBool(isFileValid(file));
      if (isFileValidBool) {
        const base64String = await imageToBase64(file);
        setB64str(base64String);
      }
    } catch (error) {
      console.error("Error handling file change:", error);
    }
  };

  const handleSubmit = async () => {
    event.dateTime = formatDateTime();
    event.imageData = b64str;
    try {
      console.log(event);
      dispatch(addEvent(event));
    } catch {
      console.error("error");
    }
  };

  const handleInputChange = (propName) => (e) => {
    setEvent(   (curr) => ( { ...curr, [propName]: e.target.value } ));
    setTouchedF((curr) => ( { ...curr, [propName]: true } ))
  };

  useEffect(() => {
    setIsFormValid(
      isTitleValid(event.title) &&
      isLocationValid(event.location) &&
      isDateValid(date) &&
      isTimeValid(time) &&
      isHostValid(event.host) &&
      isShortDescValid(event.shortDesc) &&
      isFullDescValid(event.fullDesc) &&
      isFileValidBool
    );
      
    if (isError !== undefined) {
        if (!isError) {
            toast.success("Event successfully added!");
            navigate("/");
        } else {
            toast.error(`Unable to create event: ${errorMsg}`);
        }
        dispatch(setErrorEvents({isError: false, errorMsg:""}));   
    }

  }, [event, date, time, isFileValidBool, isError, errorMsg]);

  const textHT  = (fieldName, length) => `${fieldName} should not be empty and should be no more than ${length} characters`
  const dateHT  = "Date should be in a format of DD/MM/YYYY"
  const timeHT  = "Time should be in a format of HH:MM"

  return (
    <>
      <Header />
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
                  label="Title"
                  variant="filled"
                  error={touchedF.title && !isTitleValid(event.title)}
                  helperText={touchedF.title && !isTitleValid(event.title) ? textHT("Title", "50") : ''}
                  onChange={handleInputChange("title")}
                />
              </div>

              <div className="input-container">
                <TextField
                  className="event-text-field"
                  required
                  fullWidth
                  label="Location"
                  variant="filled"
                  error={touchedF.location && !isLocationValid(event.location)}
                  helperText={touchedF.location && !isLocationValid(event.location) ? textHT("Location", "50") : ''}
                  onChange={handleInputChange("location")}
                />
              </div>

              <div className="input-container">
                <div className="dateTime-container">
                  <div className="date-container">
                    <TextField
                      className="event-text-field"
                      required
                      fullWidth
                      label="Date"
                      variant="filled"
                      placeholder="DD/MM/YYYY"
                      error={touchedF.dateTime && !isDateValid(date)}
                      helperText={touchedF.dateTime && !isDateValid(date) ? dateHT : ''}
                      onChange={(e) => setDate(e.target.value)}
                    />
                  </div>
                  <div className="time-container">
                    <TextField
                      className="event-text-field"
                      required
                      fullWidth
                      label="Time"
                      variant="filled"
                      placeholder="HH:MM"
                      error={touchedF.dateTime && !isTimeValid(time)}
                      helperText={touchedF.dateTime && !isTimeValid(time) ? timeHT : ''}
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
                  label="Host"
                  variant="filled"
                  error={touchedF.host && !isHostValid(event.host)}
                  helperText={touchedF.host && !isHostValid(event.host)? textHT("Host", "50") : ''}
                  onChange={handleInputChange("host")}
                />
              </div>

              <div className="input-container">
                <TextField
                  className="event-text-field"
                  required
                  multiline
                  fullWidth
                  label="Short Overview"
                  variant="filled"
                  error={touchedF.shortDesc && !isShortDescValid(event.shortDesc)}
                  helperText={touchedF.shortDesc && !isShortDescValid(event.shortDesc) ? textHT("Short overview", "100") : ''}
                  onChange={handleInputChange("shortDesc")}
                />
              </div>

              <div className="input-container">
                <TextField
                  className="event-text-field"
                  required
                  multiline
                  fullWidth
                  label="Description"
                  variant="filled"
                  error={touchedF.fullDesc && !isFullDescValid(event.fullDesc)}
                  helperText={touchedF.fullDesc && !isFullDescValid(event.fullDesc) ? textHT("Description", "1000") : ''}
                  onChange={handleInputChange("fullDesc")}
                />
              </div>
            </ThemeProvider>

            <div className="input-container">
              <InputFileUpload onChange={handleFileChange} />
            </div>

            <div className="input-container">
              <CSButton
                text="Create"
                onClick={(e) => {
                  e.preventDefault();
                  if (isFormValid) {
                    handleSubmit();
                  } else {
                    console.log("Input is invalid")
                  }
                }}
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Event;
