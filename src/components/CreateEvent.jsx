import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles/Event.css";
// import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addEvent } from "../redux/slices/eventSlice";

function Event() {
  const [event, setEvent] = useState(null);
  const [correctlyAdded, setCorrectlyAdded] = useState(false);
  const dispatch = useDispatch();

  const handle = {
    createEvent: (e) => {
      const formData = new FormData(e);
      const response = dispatch(addEvent(formData));
      // console.log(formData);

      // try {
      //   dispatch(addEvent(formData));
      //   // if (response.data === 409) {
      //   //   setCorrectlyCreated("Not correctly added");
      //   // } else if (response.status === 200) {
      //   //   setCorrectlyCreated("Correctly added");
      //   // }
      // } catch (error) {
      //   console.log(error.message);
      // }
    },
  };

  useEffect(() => {
    //verificar que este todo bien
  }, [event]);

  return (
    <>
      <div className="initial-container-info container">
        <form
          id="newProductForm"
          onSubmit={(e) => {
            e.preventDefault();
            handle.createEvent(e.target);
            console.log("e", e.target);
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
                      shorDescription: e.target.value,
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
                defaultValue={event ? event.fullDescription : ""}
                onChange={(e) => {
                  setEvent((current) => {
                    return {
                      ...current,
                      fullDescription: e.target.value,
                    };
                  });
                }}
              ></textarea>
            </div>
            <div className="input-group  m-2 mb-3">
              <div className="custom-file">
                <input
                  type="file"
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
