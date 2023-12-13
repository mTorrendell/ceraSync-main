import React, { useState } from "react";
import "./styles/Subscription.css";
import { ToastContainer, toast } from "react-toastify";

const Subscription = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (value) => {
    setInputValue(value);
  };
  return (
    <div className="container d-flex justify-content-center">
      <div className="row outerContainer m-6 subscribe center">
        <h3 className="col-12">
          Want to be updated about new events? Subscribe for our newsletter!
        </h3>
        <div className="input-group mb-3">
          <div className="input-group-prepend"></div>
          <input
            className="col-12 send-back form-control"
            id="input"
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder={"Enter your email"}
            aria-describedby="inputGroup-sizing-default"
          />
        </div>
        <div className="col-12 button" onClick={() => toast("Out of reach")}>
          SUBSCRIBE
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Subscription;
