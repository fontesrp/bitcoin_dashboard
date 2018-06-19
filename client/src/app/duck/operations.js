import Creators from "./actions";
import Api from "../lib/Api";

const getUserData = function (jwt, userId) {

  return function (dispatch) {

    const { requestUserData, recieveUserData } = Creators;

    dispatch(requestUserData());

    return Api
      .get(`users/${userId}`, jwt)
      .then(function (json) {

        if (json.id) {
          dispatch(recieveUserData(json));
        } else {
          dispatch(signInAsGuest());
        }
      });
  };
};

const { signInAsGuest } = Creators;

export default {
  getUserData,
  signInAsGuest
};
