import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles/Event.css";
import "./styles/CreateEvent.css";
// import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addEvent } from "../redux/slices/eventSlice";
import { imageToBase64 } from "../util/ImageConverter";
import { Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

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

function Event() {
  const [event, setEvent] = useState(null);
  const [b64str, setB64str] = useState(null);

  //NICK: the state that helps prevent errors
  const [correctlyAdded, setCorrectlyAdded] = useState(false);
  const dispatch = useDispatch();

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
    event.imageData = b64str;
    try {
      console.log(event);
      dispatch(addEvent(event));
    } catch {
      console.error("error");
    }
  };

  useEffect(() => {
    //NICK: Everytime the "event" (it is withtin the parenthesis) changes the logic here will be excecute
    //So verify things like length of input!
  }, [event]);

  return (
    <>
      <div className="initial-container-info container">
        <form
          className="newProductForm"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
            // handle.createEvent(e.target);
            //handle.createEvent();
            //console.log("e", e.target);
          }}
        >
          <div className="center row submit-container">
            <h1 className="nTitle ">SUBMIT YOUR EVENT</h1>
            <div className="input-group mb-4">
              <div className="input-group-prepend"></div>
              <input
                required
                type="text"
                className="form-control"
                aria-label="Default"
                placeholder="Title"
                aria-describedby="inputGroup-sizing-default"
                defaultValue={event ? event.title : ""}
                onChange={(e) => {
                  setEvent((current) => {
                    return {
                      ...current,
                      title: e.target.value,
                    };
                  });
                }}
              />
            </div>
            <div className="input-group mb-4">
              <div className="input-group-prepend"></div>
              <input
                required
                type="text"
                className="form-control"
                aria-label="Default"
                placeholder="Location"
                aria-describedby="inputGroup-sizing-default"
                defaultValue={event ? event.location : ""}
                onChange={(e) => {
                  setEvent((current) => {
                    return {
                      ...current,
                      location: e.target.value,
                    };
                  });
                }}
              />
            </div>
            <div className="input-group mb-4">
              <div className="input-group-prepend"></div>
              <input
                required
                type="text"
                className="form-control"
                aria-label="Default"
                placeholder="Date"
                aria-describedby="inputGroup-sizing-default"
                defaultValue={event ? event.dateTime : ""}
                onChange={(e) => {
                  setEvent((current) => {
                    return {
                      ...current,
                      dateTime: e.target.value,
                    };
                  });
                }}
              />
            </div>
            <div className="input-group mb-4">
              <div className="input-group-prepend"></div>
              <input
                required
                type="text"
                className="form-control"
                aria-label="Default"
                placeholder="Host"
                aria-describedby="inputGroup-sizing-default"
                defaultValue={event ? event.host : ""}
                onChange={(e) => {
                  setEvent((current) => {
                    return {
                      ...current,
                      host: e.target.value,
                    };
                  });
                }}
              />
            </div>
            <div className="input-group mb-4">
              <textarea
                required
                className="form-control"
                aria-label="With textarea"
                placeholder="Short Overview"
                defaultValue={event ? event.shorDescription : ""}
                onChange={(e) => {
                  setEvent((current) => {
                    return {
                      ...current,
                      shortDesc: e.target.value,
                    };
                  });
                }}
              ></textarea>
            </div>
            <div className="input-group mb-4">
              <textarea
                required
                className="form-control"
                aria-label="With textarea"
                placeholder="Description"
                defaultValue={event ? event.fullDesc : ""}
                onChange={(e) => {
                  setEvent((current) => {
                    return {
                      ...current,
                      fullDesc: e.target.value,
                    };
                  });
                }}
              ></textarea>
            </div>
            <div className="input-group  m-2 mb-4">
              <div className="custom-file">
                <input
                  type="file"
                  onChange={handleFileChange}
                  className="custom-file-input"
                  id="inputGroupFile01"
                />
              </div>
            </div>
            <div className="button-container">
              <ThemeProvider theme={theme}>
                <Button
                  size="large"
                  color="coral"
                  variant="contained"
                  type="submit"
                >
                  {" "}
                  <div className="text_button">Create</div>
                </Button>
              </ThemeProvider>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Event;
