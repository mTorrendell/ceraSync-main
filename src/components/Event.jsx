import React from "react";
import { Link } from "react-router-dom";
import "./styles/Header.css";
import Subscription from "./Subscription";
import "./styles/Event.css";

function Header() {
  return (
    <>
      <div className="row ">
        <div className="col-md-5 image-container">
          <img className="ceramicPhoto" src={require("./img/ceramic.jpeg")} />
        </div>

        <div className="col-md-7 event text-start themeColor">
          <div className="row innerEvent">
            <h2>Educational Event on how to recycle ceramics</h2>
          </div>

          <hr className="lineEvent p-2" />
          <div className="row d-flex ">
            <h5 className="bold col-3 innerEvent d-flex align-items-start">
              Where
            </h5>
            <h5 className="col-9 d-flex align-items-start">
              Lohmühlenstraße 65, 12435 Berlin
            </h5>
          </div>

          <div className="row d-flex ">
            <h5 className="bold col-3 innerEvent d-flex align-items-start">
              Where
            </h5>
            <h5 className="col-9 d-flex align-items-start">
              Lohmühlenstraße 65, 12435 Berlin
            </h5>
          </div>

          <div className="row d-flex ">
            <h5 className="bold col-3 innerEvent d-flex align-items-start">
              Where
            </h5>
            <h5 className="col-9 d-flex align-items-start">
              Lohmühlenstraße 65, 12435 Berlin
            </h5>
          </div>
          <hr className="lineEvent p-2" />
          <div className="row">
            <h5>
              Educate yourself on how to recycle ceramics with an interactive
              body tracking computer game that our amazing ceramic enthusiast
              Ava developed. Use your body and mind and experience the fantastic
              science of ceramic recycling. We will fusion the old art of
              ceramics with a futuristic high tech computer system to take a
              step into the future.
            </h5>
          </div>
        </div>

        <hr className="m-4" />
        <Subscription />
      </div>
    </>
  );
}

export default Header;
