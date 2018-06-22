import types from "./types";
import createReducer from "../../lib/createReducer";

const INITIAL_STATE = {
  cable: null,
  subscription: null,
  rates: [],
  updatedAt: "",
  loading: true
};

const ratesReducer = createReducer(INITIAL_STATE, {

  [types.SAVE_CABLE](state, action) {
    return {
      ...state,
      cable: action.cable
    };
  },

  [types.SAVE_SUBSCRIPTION](state, action) {
    return {
      ...state,
      subscription: action.subscription
    };
  },

  [types.REQUEST_RATES](state, action) {
    return {
      ...state,
      loading: true
    };
  },

  [types.RECIEVE_RATES](state, action) {

    const {
      rates,
      updatedAt
    } = action.payload;

    return {
      ...state,
      loading: false,
      rates,
      updatedAt
    };
  },

  [types.RESET](state, action) {
    return {
      ...state,
      ...INITIAL_STATE
    };
  }
});

export default ratesReducer;
