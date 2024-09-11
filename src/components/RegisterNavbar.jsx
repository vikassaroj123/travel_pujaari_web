import React from "react";

const RegisterNavbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
      id="ftco-navbar"
    >
      <div className="container">
        <a className="navbar-brand" href="/">
          Travel<span> Pujaari</span>
        </a>
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
            <li className="nav-item">
              <span style={{ color: "#238b94" }}>
                Agent Helpline - +91 8595145268 / 8595145268
              </span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default RegisterNavbar;
