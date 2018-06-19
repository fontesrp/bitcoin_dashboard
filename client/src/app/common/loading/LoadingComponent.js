import React from "react";

import "./Loading.css";

const LoadingComponent = function (props) {

  return (
    <div className="Loading">
      <img src="/spinner.gif" alt="Loading..." />
    </div>
  );
};

export default LoadingComponent;
