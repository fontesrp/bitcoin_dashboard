import React, { Component } from "react";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import NavbarComponent from "./navbar/NavbarComponent";
import RatesContainer from "./rates/RatesContainer";

class AppComponent extends Component {

  render() {

    return (
      <div className="App">
        <NavbarComponent />
        <RatesContainer />
      </div>
    );
  }
}

export default AppComponent;
