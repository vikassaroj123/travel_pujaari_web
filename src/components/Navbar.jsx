import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { auth } from "../firebase.js"; // Adjust the path to your firebase.js

const Navbar = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log("User signed out");
      })
      .catch((error) => {
        // An error happened.
        console.error("Error signing out: ", error);
      });
  };

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
              className={`nav-item cta `}
              style={{ display: "flex" }} // Added inline styling
            >
              {user ? (
                <NavLink className="nav-link" onClick={handleLogout}>
                  Log Out
                </NavLink>
              ) : (
                <>
                  <NavLink
                    to="/register-now"
                    className="nav-link"
                    style={{ marginRight: "10px" }}
                  >
                    Register Now
                  </NavLink>
                  <NavLink to="/login" className="nav-link">
                    Log In
                  </NavLink>
                </>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
