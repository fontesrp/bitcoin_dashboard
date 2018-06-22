import React from "react";

import { toCurrency } from "../lib/util";

const RatesRowComponent = function (props) {

  const {
    symbol,
    rate
  } = props;

  return (
    <div className="RatesRow">
      <div className="rate-symbol-container">
        <p className="text-uppercase font-weight-bold">
          { symbol }
        </p>
      </div>
      <div className="rate-currency-container">
        <p className="rate-currency">
          { toCurrency(rate) }
        </p>
      </div>
    </div>
  );
};

export default RatesRowComponent;
