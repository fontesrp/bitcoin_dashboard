import React from "react";

import { toCurrency } from "../lib/util";

const RatesRowComponent = function (props) {

  const {
    symbol,
    rate
  } = props;

  return (
    <div>
      <p>
        <span className="text-uppercase font-weight-bold">
          { symbol }
        </span>
        <span className="rate-currency">
          { toCurrency(rate) }
        </span>
      </p>
    </div>
  );
};

export default RatesRowComponent;
