import { connect } from "react-redux";

import AppComponent from "./AppComponent";
import { appOperations } from "./duck";

const mapStateToProps = function (state) {

  const {
    jwt,
    isSignedIn,
    userData,
    loading
  } = state.app;

  return {
    jwt,
    isSignedIn,
    userData,
    loading
  };
};

const mapDispatchToProps = function (dispatch) {

  const { getUserData, signInAsGuest } = appOperations;

  return {
    getUserData: (jwt, userId) => dispatch(getUserData(jwt, userId)),
    signInAsGuest: () => dispatch(signInAsGuest())
  };
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppComponent);

export default AppContainer;
