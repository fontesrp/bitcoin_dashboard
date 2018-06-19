import types from "./types";

const requestUserData = () => ({
  type: types.REQUEST_USER_DATA
});

const recieveUserData = (userData) => ({
  type: types.RECIEVE_USER_DATA,
  userData
});

const signInAsGuest = () => ({
  type: types.SIGN_IN_AS_GUEST
});

export default {
  requestUserData,
  recieveUserData,
  signInAsGuest
};
