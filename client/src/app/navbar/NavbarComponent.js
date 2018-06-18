import React from "react";

import "./Navbar.css";
import SessionComponent from "./SessionComponent";

const NavbarComponent = function (props) {

  return (
    <nav className="navbar navbar-expand navbar-dark">
      <a className="navbar-brand font-weight-bold" href="#">BTC Dash</a>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ml-auto">
          <SessionComponent { ...props } />
        </ul>
      </div>
    </nav>
  );
};

export default NavbarComponent;
