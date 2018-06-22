import types from "./types";

const saveCable = (cable) => ({
  type: types.SAVE_CABLE,
  cable
});

const saveSubscription = (subscription) => ({
  type: types.SAVE_SUBSCRIPTION,
  subscription
});

const requestRates = () => ({
  type: types.REQUEST_RATES
});

const saveRates = (payload) => ({
  type: types.RECIEVE_RATES,
  payload
});

const reset = () => ({
  type: types.RESET
});

export default {
  saveCable,
  saveSubscription,
  requestRates,
  saveRates,
  reset
};
