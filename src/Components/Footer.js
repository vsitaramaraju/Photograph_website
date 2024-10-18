import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white text-black py-5">
      <div className="container text-center">
        {/* Navigation Menu Links */}
        <div className="mb-3">
          <Link to="/" className="text-black mx-3 footerlinks">
            Home
          </Link>
          <Link to="/portfolio" className="text-black mx-3 footerlinks">
            Portfolio
          </Link>
          <Link to="/video" className="text-black mx-3 footerlinks">
            Video
          </Link>
          <Link to="/client-album" className="text-black mx-3 footerlinks">
            Client Album
          </Link>
          <Link to="/bio" className="text-black mx-3 footerlinks">
            Bio
          </Link>
        </div>
        {/* Social Media Icons */}
        <div className="mb-3">
          <a
            href="https://facebook.com"
            className="text-black mx-3"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-facebook"></i>
          </a>
          <a
            href="https://twitter.com"
            className="text-black mx-3"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-twitter-x"></i>
          </a>
          <a
            href="https://instagram.com"
            className="text-black mx-3"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-instagram"></i>
          </a>
          <a
            href="https://linkedin.com"
            className="text-black mx-3"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-linkedin"></i>
          </a>
        </div>

        {/* Horizontal line */}
        <hr className="my-4" />

        {/* Copyright message */}
        <p className="mb-0" style={{ fontSize: "small", fontWeight: 300 }}>
          &copy; 2024 Customized Application. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
