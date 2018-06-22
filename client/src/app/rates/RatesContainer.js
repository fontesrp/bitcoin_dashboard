import { connect } from "react-redux";

import RatesComponent from "./RatesComponent";
import { ratesOperations } from "./duck";

const mapStateToProps = function (state) {

  const { jwt } = state.session;

  const {
    cable,
    subscription,
    rates,
    updatedAt,
    loading
  } = state.rates;

  return {
    jwt,
    cable,
    subscription,
    rates,
    updatedAt,
    loading
  };
};

const mapDispatchToProps = function (dispatch) {

  const {
    subscribeToRates,
    getRates,
    recieveRates,
    destroyCable
  } = ratesOperations;

  return {
    subscribeToRates: (props) => dispatch(subscribeToRates(props)),
    getRates: (jwt) => dispatch(getRates(jwt)),
    onRatesReceived: (rates) => dispatch(recieveRates(rates)),
    destroyCable: (props) => dispatch(destroyCable(props))
  };
};

const RatesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RatesComponent);

export default RatesContainer;
