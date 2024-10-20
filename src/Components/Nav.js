import { Link } from "react-router-dom";
import "../App.css";
import logo from "../assets/2d_logo-01-removebg-preview.png";
import { NavLinks } from "./Common/CommonComponent";

const Navbar = () => {
  const closeNavbar = () => {
    const navbarCollapse = document.getElementById("navbarNav");
    if (navbarCollapse.classList.contains("show")) {
      navbarCollapse.classList.remove("show"); // Closes the navbar
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-transparent fixed-top navStyle">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/" onClick={closeNavbar}>
          <img src={logo} alt="Logo" className="logo" />
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
            {NavLinks.map(item => (
              <li className="nav-item" key={item.title}>
                <Link
                  className="nav-link"
                  style={{ color: "rgb(210 164 80)" }}
                  to={item.link}
                  onClick={closeNavbar}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
