import Creators from "./actions";
import Api from "../../lib/Api";

const subscribeToRates = function (props) {

  return function (dispatch) {

    const {
      saveCable,
      saveSubscription
    } = Creators;

    const {
      jwt,
      cable,
      subscription,
      onRatesReceived
    } = props;

    let apiCable;

    if (cable) {

      apiCable = cable
    } else {

      apiCable = Api.createCable(jwt);

      dispatch(saveCable(apiCable));
    }

    if (subscription) {
      subscription.unsubscribe();
    }

    const apiSubscription = Api.subscribe(apiCable, { onRatesReceived }).rates;

    dispatch(saveSubscription(apiSubscription));
  };
};

const getRates = function (jwt) {

  return function (dispatch) {

    const {
      requestRates,
      saveRates
    } = Creators;

    dispatch(requestRates());

    return Api
      .get("/exchange_rates", jwt)
      .then(json => {
        dispatch(saveRates({
          rates: json.rates,
          updtaedAt: json.updated_at
        }))
      })
  };
};

const recieveRates = function (response) {

  return function (dispatch) {

    const { saveRates } = Creators;

    dispatch(saveRates({
      rates: response.rates,
      updtaedAt: response.updated_at
    }));
  };
};

const destroyCable = function (props) {

  return function (dispatch) {

    const { reset } = Creators;

    const {
      cable,
      subscription
    } = props;

    subscription.unsubscribe();
    cable.disconnect();

    dispatch(reset());
  };
};

export default {
  subscribeToRates,
  getRates,
  recieveRates,
  destroyCable
};
