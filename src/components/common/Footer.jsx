import React from "react";
import "./styles/Footer.css";
import "bootstrap/dist/css/bootstrap.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Footer() {
  return (
    <>
      <div className="container footer text-center">
        <div className="row align-items-start"></div>
        <div className="row align-items-start">
          <div className="col-3 info" onClick={() => toast("Out of reach")}>
            FAQs
          </div>
          <div className="col-3 info" onClick={() => toast("Out of reach")}>
            Cookie Policy
          </div>
          <div className="col-3 info" onClick={() => toast("Out of reach")}>
            General Conditions
          </div>
          <div className="col-3 info" onClick={() => toast("Out of reach")}>
            Privacy Statement
          </div>
        </div>
        <div className="row align-items-start">
          <div className="col bottom-info info">©2023 CeraSync</div>
        </div>
      </div>

      <ToastContainer />
    </>
  );
}

export default Footer;
