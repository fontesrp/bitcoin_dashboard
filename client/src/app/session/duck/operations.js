import Creators from "./actions";
import Api from "../../lib/Api";

const searchEmail = function (email) {

  return function (dispatch) {

    const {
      sendRequest,
      recieveResponse,
      recieveSearchResult
    } = Creators;

    const query = `?email=${encodeURIComponent(email)}`;

    dispatch(sendRequest());

    return Api
      .get(`/users${query}`)
      .then(function (json) {
        dispatch(recieveResponse());
        dispatch(recieveSearchResult(json, email));
      });
  }
};

const signUserIn = function (props) {

  return function (dispatch) {

    const {
      sendRequest,
      recieveResponse,
      signIn
    } = Creators;

    const {
      email,
      password
    } = props;

    dispatch(sendRequest());

    return Api
      .post("/tokens", {
        email,
        password
      })
      .then(function (json) {
        dispatch(recieveResponse());
        dispatch(signIn(json));
      });
  };
};

const signUserUp = function () {};

const getUserData = function (jwt, userId) {

  return function (dispatch) {

    const {
      sendRequest,
      recieveUserData,
      recieveResponse,
      signInAsGuest
    } = Creators;

    dispatch(sendRequest());

    return Api
      .get(`users/${userId}`, jwt)
      .then(function (json) {

        dispatch(recieveResponse());

        if (json.id) {
          dispatch(recieveUserData(json));
        } else {
          dispatch(signInAsGuest());
        }
      });
  };
};

const {
  signInAsGuest,
  resetSearch
} = Creators;

export default {
  searchEmail,
  signUserIn,
  signUserUp,
  resetSearch,
  getUserData,
  signInAsGuest
};
