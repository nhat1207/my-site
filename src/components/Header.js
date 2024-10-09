import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../scss/section/Header.scss";

const Header = () => {
  const location = useLocation(); // Lấy đường dẫn hiện tại

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light position-fixed position-relative z-3">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img
              src="/assets/Image/logo.png"
              alt="Logo"
              className="img-fluid d-block"
            />
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
                <Link
                  className={`nav-link ${
                    location.pathname === "/" ? "active" : ""
                  }`}
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/about" ? "active" : ""
                  }`}
                  to="/about"
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/project" ? "active" : ""
                  }`}
                  to="/project"
                >
                  Project
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
