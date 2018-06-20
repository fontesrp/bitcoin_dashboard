import React, { Component } from "react";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import NavbarComponent from "./navbar/NavbarComponent";

class AppComponent extends Component {

  render() {

    return (
      <div className="App">
        <NavbarComponent />
        App
      </div>
    );
  }
}

export default AppComponent;
