import types from "./types";
import createReducer from "../../lib/createReducer";

const INITIAL_STATE = {
  emailSearched: false,
  userFullName: "",
  userEmail: "",
  loading: false,
  error: [],
  jwt: "",
  isSignedIn: false,
  userData: {}
};

const sessionReducer = createReducer(INITIAL_STATE, {

  [types.SEND_REQUEST](state, action) {

    return {
      ...state,
      loading: true
    };
  },

  [types.RECIEVE_RESPONSE](state, action) {

    return {
      ...state,
      loading: false
    };
  },

  [types.RECIEVE_SEARCH_RESULT](state, action) {

    const { email, result } = action;
    let userEmail;
    let userFullName;
    let error;

    if (result.error) {
      userEmail = "";
      userFullName = "";
      error = result.error;
    } else {
      userEmail = email;
      userFullName = result.full_name;
      error = [];
    }

    return {
      ...state,
      emailSearched: true,
      userEmail,
      userFullName,
      error
    };
  },

  [types.RESET_SEARCH](state, action) {

    const {
      emailSearched,
      userFullName,
      userEmail,
      loading,
      error
    } = INITIAL_STATE;

    return {
      ...state,
      emailSearched,
      userFullName,
      userEmail,
      loading,
      error
    };
  },

  [types.SIGN_IN](state, action) {

    const { payload } = action;

    let jwt;
    let error;
    let isSignedIn;

    if (payload.error) {
      error = ["Invalid username/password"];
      jwt = "";
      isSignedIn = false;
    } else {
      error = [];
      jwt = payload.jwt;
      isSignedIn = true;
    }

    return {
      ...state,
      error,
      jwt,
      isSignedIn
    };
  },

  [types.SIGN_UP](state, action) {

    return {
      ...state
    };
  },

  [types.RECIEVE_USER_DATA](state, action) {

    return {
      ...state,
      isSignedIn: true,
      userData: action.userData
    };
  },

  [types.SIGN_IN_AS_GUEST](state, action) {

    return {
      ...state,
      ...INITIAL_STATE
    };
  }
});

export default sessionReducer;
