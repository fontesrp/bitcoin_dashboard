import types from "./types";

const INITIAL_STATE = {
  jwt: "",
  isSignedIn: false,
  userData: {},
  loading: true
};

const appReducer = function (state = INITIAL_STATE, action) {

  switch (action.type) {
  case types.REQUEST_USER_DATA:

    return {
      ...state,
      loading: true
    };

  case types.RECIEVE_USER_DATA:

    return {
      ...state,
      loading: false,
      isSignedIn: true,
      userData: action.userData
    };

  case types.SIGN_IN_AS_GUEST:

    return {
      ...state,
      ...INITIAL_STATE,
      loading: false
    };

  default:
    return state;
  }
};

export default appReducer;
