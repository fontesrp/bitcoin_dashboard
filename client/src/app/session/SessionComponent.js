import React from "react";

const SessionComponent = function (props) {

  const {
    isSignedIn = false,
    userFullName = ""
  } = props;

  if (!props.isSignedIn) {
    return (
      <li className="nav-item active">
        <a className="nav-link" href="#">Sign in/up</a>
      </li>
    );
  }

  return (
    <li className="nav-item dropdown active">
      <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown">
        { userFullName }
      </a>
      <div className="dropdown-menu" aria-labelledby="navbarDropdown">
        <a className="dropdown-item" href="#">Select currencies</a>
        <a className="dropdown-item" href="#">Change password</a>
      </div>
    </li>
  );
};

export default SessionComponent;
