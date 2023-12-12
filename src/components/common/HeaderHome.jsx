import { Link } from "react-router-dom";
import "./styles/Header.css";

function HeaderHome() {
  return (
    <div id="header-container">
      <Link className="link" to="/">
        <h1 className="title-header2">CERA SYNC</h1>
      </Link>
      <hr className="lin" />
    </div>
  );
}

export default HeaderHome;
