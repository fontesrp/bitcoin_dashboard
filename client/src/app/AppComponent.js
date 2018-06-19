import React, { Component } from "react";
import jwtDecode from "jwt-decode";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import NavbarComponent from "./navbar/NavbarComponent";
import LoadingComponent from "./common/loading/LoadingComponent";

class AppComponent extends Component {

  constructor(props) {

    super(props);

    this.validateSession();
  }

  validateSession() {

    const { jwt, getUserData, signInAsGuest } = this.props;

    if (jwt === "") {
      signInAsGuest();
      return;
    }

    const userInfo = jwtDecode(jwt);

    console.log("userInfo", userInfo);

    getUserData(jwt, userInfo.id);
  }

  render() {

    const { loading } = this.props;

    if (loading) {
      return (<LoadingComponent />);
    }

    return (
      <div className="App">
        <NavbarComponent />
        App
      </div>
    );
  }
}

export default AppComponent;
