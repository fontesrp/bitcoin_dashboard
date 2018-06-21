import React, { Component } from "react";

import RatesRowComponent from "./RatesRowComponent";
import { utc2local } from "../lib/util";

class RatesComponent extends Component {

  render() {

    const {
      userExchangeRates,
      updatedAt
    } = this.props;

    return (
      <div className="Rates text-center">
        { userExchangeRates
          .map(er => (
            <RatesRowComponent
              key={ er.id }
              symbol={ er.selling_currency_symbol }
              rate={ er.rate }
            />
          ))
        }
        <div>
          <p>
            { utc2local(updatedAt) }
          </p>
        </div>
      </div>
    );
  }
}

export default RatesComponent;
