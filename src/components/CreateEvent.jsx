import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useSelector } from "react-redux";
import "./styles/Event.css";
import { useNavigate, useParams } from "react-router-dom";

function Event() {
  // const token = useSelector((state) => state.cera.userData.token);
  // const params = useParams();

  // const [event, setEvent] = useState(null);

  return (
    <>
      <div className="initial-container-info container">
        <div className="center row submit-container">
          <h1 className="title ">SUBMIT YOUR EVENT</h1>
          <div class="input-group mb-3">
            <div class="input-group-prepend"></div>
            <input
              type="text"
              class="form-control"
              aria-label="Default"
              placeholder="Title"
              aria-describedby="inputGroup-sizing-default"
            />
          </div>
          <div class="input-group mb-3">
            <div class="input-group-prepend"></div>
            <input
              type="text"
              class="form-control"
              aria-label="Default"
              placeholder="Location"
              aria-describedby="inputGroup-sizing-default"
            />
          </div>
          <div class="input-group mb-3">
            <div class="input-group-prepend"></div>
            <input
              type="text"
              class="form-control"
              aria-label="Default"
              placeholder="Date"
              aria-describedby="inputGroup-sizing-default"
            />
          </div>
          <div class="input-group mb-3">
            <div class="input-group-prepend"></div>
            <input
              type="text"
              class="form-control"
              aria-label="Default"
              placeholder="Host"
              aria-describedby="inputGroup-sizing-default"
            />
          </div>
          <div class="input-group mb-3">
            <textarea
              class="form-control"
              aria-label="With textarea"
              placeholder="Short Overview"
            ></textarea>
          </div>
          <div class="input-group mb-3">
            <textarea
              class="form-control"
              aria-label="With textarea"
              placeholder="Description"
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
            <div className="button">Check it out</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Event;
