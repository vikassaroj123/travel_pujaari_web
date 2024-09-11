import React from "react";
import { NavLink } from "react-router-dom"; // Import NavLink for active link styling

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
      id="ftco-navbar"
    >
      <div className="container nv-container">
        <NavLink className="navbar-brand" to="/">
          <img src="/images/logo.png" alt="Travel Pujari" />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#ftco-nav"
          aria-controls="ftco-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="oi oi-menu"></span> Menu
        </button>

        <div className="collapse navbar-collapse" id="ftco-nav">
          <ul className="navbar-nav ml-auto">
            <li
              className={`nav-item ${
                window.location.pathname === "/" ? "active" : ""
              }`}
            >
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
            </li>
            <li
              className={`nav-item ${
                window.location.pathname === "/about" ? "active" : ""
              }`}
            >
              <NavLink to="/about" className="nav-link">
                About
              </NavLink>
            </li>
            <li
              className={`nav-item ${
                window.location.pathname === "/destination" ? "active" : ""
              }`}
            >
              <NavLink to="/destination" className="nav-link">
                Our Services
              </NavLink>
            </li>
            <li
              className={`nav-item ${
                window.location.pathname === "/blog" ? "active" : ""
              }`}
            >
              <NavLink to="/blog" className="nav-link">
                Blog
              </NavLink>
            </li>
            <li
              className={`nav-item ${
                window.location.pathname === "/contact" ? "active" : ""
              }`}
            >
              <NavLink to="/contact" className="nav-link">
                Contact
              </NavLink>
            </li>
            <li
              className={`nav-item cta ${
                window.location.pathname === "/register-now" ? "active" : ""
              }`}
            >
              <NavLink to="/register-now" className="nav-link">
                Register Now
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
