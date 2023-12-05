import React from "react";
import "./styles/Footer.css";
import "bootstrap/dist/css/bootstrap.css";

function Footer() {
  return (
    <>
      <div className="container footer text-center">
        <div className="row align-items-start">----</div>
        <div className="row align-items-start">
          <div className="col-3 info">FAQs</div>
          <div className="col-3 info">Cookie Policy</div>
          <div className="col-3 info">General Conditions</div>
          <div className="col-3 info">Privacy Statement</div>
        </div>
        <div className="row align-items-start">
          <div className="col bottom-info">©2023 CeraSync</div>
        </div>
      </div>
    </>
  );
}

export default Footer;
