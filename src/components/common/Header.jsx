import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./styles/Header.css";
import Line from "./Line";

function Header() {
  // window.location.reload();
  const [isUserHome, setUserHome] = useState(false);

  const currentURL = window.location.pathname;

  useEffect(() => {
   
    if (currentURL === "/") {
      setUserHome(true);
    } else {
      setUserHome(false);
    }
  }, []);

  return isUserHome ? (
    <div id="header-container">
      <Link className="link" to="/">
        <h1 className="title-header2">CERA SYNC</h1>
      </Link>
      <hr className="lin" />
    </div>
  ) : (
    <div id="header-container">
      <Link className="link" to="/">
        <h1 className="title-header">CERA SYNC</h1>
      </Link>
      <Line />
    </div>
  );
}

export default Header;
