import React, { Component } from "react";

import "./Rates.css";
import RatesRowComponent from "./RatesRowComponent";
import { utc2local } from "../lib/util";

class RatesComponent extends Component {

  constructor(props) {

    super(props);

    this.subscribe();
    props.getRates(props.jwt);
  }

  componentDidUpdate(prevProps) {

    const {
      jwt,
      getRates
    } = this.props;

    if (prevProps.jwt !== jwt) {
      this.subscribe();
      getRates(jwt);
    }
  }

  componentWillUnmount() {

    const {
      cable,
      subscription,
      destroyCable
    } = this.props;

    destroyCable({
      cable,
      subscription
    });
  }

  subscribe() {

    const {
      jwt,
      cable,
      subscription,
      subscribeToRates,
      onRatesReceived
    } = this.props;

    subscribeToRates({
      jwt,
      cable,
      subscription,
      onRatesReceived
    });
  }

  render() {

    const {
      rates = [],
      updatedAt = ""
    } = this.props;

    return (
      <div className="Rates text-center">
        { rates
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
