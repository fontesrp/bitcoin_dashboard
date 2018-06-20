import React, { Component } from "react";
import jwtDecode from "jwt-decode";

import SessionModalComponent from "./SessionModalComponent";

class SessionComponent extends Component {

  constructor(props) {

    super(props);

    this.validateSession();
  }

  validateSession() {

    const { jwt, getUserData, signInAsGuest } = this.props;

    if (!jwt) {
      signInAsGuest();
      return;
    }

    const userInfo = jwtDecode(jwt);

    console.log("userInfo", userInfo);

    getUserData(jwt, userInfo.id);
  }

  render() {

    const { props } = this;

    const {
      isSignedIn,
      userFullName
    } = props;

    if (!isSignedIn) {
      return (
        <li className="nav-item active">
          <a className="nav-link" href="#" data-toggle="modal" data-target="#sessionModal">
            Sign in/up
          </a>
          <SessionModalComponent { ...props } />
        </li>
      );
    }

    return (
      <li className="nav-item dropdown active">
        <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown">
          { userFullName }
        </a>
        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Select currencies</a>
          <a className="dropdown-item" href="#">Change password</a>
        </div>
      </li>
    );
  }
}

export default SessionComponent;
