import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    // <!--Main Navigation-->
 
  <nav class="navbar navbar-expand-lg navbar-light fixed-top navbar-scroll">
    <div class="container">
    <a className="navbar-brand" href="#">
          <img className="navbar-logo" src="/images/myLogo.png" alt="Logo" />
        </a>
        <button
          className="navbar-toggler ps-0"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
    </div>
  </nav>

    
  );
};

export default Navbar;

