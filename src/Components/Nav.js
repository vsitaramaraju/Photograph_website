import { Link } from "react-router-dom";
import "../App.css";
import logo from "../assets/2d_logo-01-removebg-preview.png";

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-transparent fixed-top navStyle">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">
        <img src={logo} alt="Logo" className="logo" />
        {/* L — T */}
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarNav"
      >
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/portfolio">
              Portfolio
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/video">
              Videos
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/client-album">
              Client Album
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/bio">
              Bio
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
