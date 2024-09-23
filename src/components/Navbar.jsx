import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { auth } from "../firebase.js";
import { RxHamburgerMenu } from "react-icons/rx";

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
        console.log("User signed out");
      })
      .catch((error) => {
        console.error("Error signing out: ", error);
      });
  };

  return (
    <>
      <style>{`
        @media (min-width: 992px) {
          .navbar-collapse {
            justify-content: center;
          }
          .nav-r {
            gap: 7px;
            padding-right: 4px;
            display: flex;
            justify-content: flex-end;
            margin-left: auto;
          }
            .nav-s{
            color: #d8d8d8 !important;
            font-size: 12px;
            }
        }
            @media(max-width:991.98px)
            {
            .nav-l{
            display: flex;
            flex-direction: column;
            }
            .nav-s{
            color: #d8d8d8 !important;
            font-size: 12px;
            }
            }
      `}</style>

      <nav
        className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
        id="ftco-navbar"
      >
        <div className="container nv-container">
          <NavLink className="navbar-brand" to="/">
            <img src="/images/logo.png" alt="Travel Pujaari" />
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
          <RxHamburgerMenu size={35} style={{ color: 'white' }} />
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

              <li className="nav-item cta nav-r">
                {user ? (
                  <>
                    <NavLink
                      to="/dashboard"
                      className="nav-link nav-l"
                      style={{ marginRight: "10px" }}
                    >
                      Dashboard
                    </NavLink>
                    <NavLink className="nav-link nav-l" onClick={handleLogout}>
                      Log Out
                    </NavLink>
                  </>
                ) : (
                  <>
                    <NavLink
                      to="/register-now"
                      className="nav-link nav-l"
                      style={{ marginRight: "10px" }}
                    >
                      Register Now
                      {/* <span className="nav-s">New Agent Registration!</span> */}
                    </NavLink>
                    <NavLink to="/login" className="nav-link nav-l">
                      Log In
                      {/* <span className="nav-s">Already Registered?</span> */}
                    </NavLink>
                  </>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
