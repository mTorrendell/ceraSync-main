import React from "react";
import { Link } from "react-router-dom";
import "./styles/Header.css";
import Line from "./Line"

function Header() {
  return (
    <div id="header-container">
      <Link className="link" to="/">
        <h1 className="title-header">CERA SYNC</h1>
      </Link>
      <Line />
    </div>
  );
}

export default Header;
