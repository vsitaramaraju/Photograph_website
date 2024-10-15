import React from "react";
import "../../Header.css";

const Header = () => {
  return (
    <header className="hero-section">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-transparent px-4">
        <a className="navbar-brand" href="#">
          {/* <img
            src="#"
            alt="Logo"
            className="logo"
          />{" "} */}
          L — T — S
        </a>
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
              <a className="nav-link active" aria-current="page" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#portfolio">
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#bio">
                Bio
              </a>
            </li>
          </ul>
        </div>
      </nav>
      {/* Hero Content */}
      <div className="hero-content text-center d-flex align-items-center justify-content-center">
        <div>
          <h1 className="display-4 fw-bold">AMANDA WILLMAN</h1>
          <p className="lead">Landscape Photographer</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
