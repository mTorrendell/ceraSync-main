import React from "react";
import { Link } from "react-router-dom";
import "./styles/Header.css";

function Header() {
  return (
    <>
      <Link className="link" to="/">
        <h1 className="title-header mt-3">CERA SYNC</h1>
      </Link>
      <hr className="line" />
    </>
  );
}

export default Header;
