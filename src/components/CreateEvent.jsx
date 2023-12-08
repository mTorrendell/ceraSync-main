import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles/Event.css";
// import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addEvent } from "../redux/slices/eventSlice";
import { imageToBase64 } from "../util/ImageConverter";

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
        const blob = await file.arrayBuffer();
        const base64String = await imageToBase64(blob);
        setB64str(base64String);
      }
    } catch (error) {
      console.error('Error handling file change:', error);
    }
  };

  const handleSubmit = async () => {
      // const formData = new FormData(e);
      event.imageData = b64str;
      //NICK: If passing directly the object does not work try using the FormData!!
      try {
        console.log(event);
        dispatch(addEvent(event));
      } catch {
        console.error("error");
      }
      //console.log("This is response", response);

  };

  useEffect(() => {
    //NICK: Everytime the "event" (it is withtin the parenthesis) changes the logic here will be excecute
    //So verify things like length of input!
  }, [event]);

  return (
    <>
      <div className="initial-container-info container">
        <form
          id="newProductForm"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
            // handle.createEvent(e.target);
            //handle.createEvent();
            //console.log("e", e.target);
          }}
        >
          <div className="center row submit-container">
            <h1 className="title ">SUBMIT YOUR EVENT</h1>
            <div className="input-group mb-3">
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
            <div className="input-group mb-3">
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
            <div className="input-group mb-3">
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
            <div className="input-group mb-3">
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
            <div className="input-group mb-3">
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
            <div className="input-group mb-3">
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
                      fullDes: e.target.value,
                    };
                  });
                }}
              ></textarea>
            </div>
            <div className="input-group  m-2 mb-3">
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
              <button className="update mt-3" type="submit">
                Create
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Event;
