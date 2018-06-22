import types from "./types";

const sendRequest = () => ({
  type: types.SEND_REQUEST
});

const recieveResponse = () => ({
  type: types.RECIEVE_RESPONSE
});

const recieveSearchResult = (result, email) => ({
  type: types.RECIEVE_SEARCH_RESULT,
  result,
  email
});

const resetSearch = () => ({
  type: types.RESET_SEARCH
});

const signIn = (payload) => ({
  type: types.SIGN_IN,
  payload
});

const signUp = (payload) => ({
  type: types.SIGN_UP,
  payload
});

const recieveUserData = (userData) => ({
  type: types.RECIEVE_USER_DATA,
  userData
});

const signInAsGuest = () => ({
  type: types.SIGN_IN_AS_GUEST
});

export default {
  sendRequest,
  recieveResponse,
  recieveSearchResult,
  resetSearch,
  signIn,
  signUp,
  recieveUserData,
  signInAsGuest
};
