import React, { useState } from "react";
import "./styles/Subscription.css";

const Subscription = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (value) => {
    setInputValue(value);
  };
  return (
    <div className="row outerContainer subscribe center">
      <h3 className="col-12">
        Want to be updated about new events? Subscribe for our newsletter!
      </h3>
      <div class="input-group mb-3">
        <div class="input-group-prepend"></div>
        <input
          className="col-12 form-control"
          id="input"
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder={"Enter your email"}
          aria-describedby="inputGroup-sizing-default"
        />
      </div>
      <div className="col-12 button">SUBSCRIBE</div>
    </div>
  );
};

export default Subscription;
