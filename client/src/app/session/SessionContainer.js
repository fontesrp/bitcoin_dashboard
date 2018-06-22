import { connect } from "react-redux";

import SessionComponent from "./SessionComponent";
import { sessionOperations } from "./duck";

const mapStateToProps = function (state) {

  const {
    emailSearched,
    userFullName,
    userEmail,
    error,
    jwt,
    isSignedIn,
    userData
  } = state.session;

  return {
    emailSearched,
    userFullName,
    userEmail,
    error,
    jwt,
    isSignedIn,
    userData
  };
};

const mapDispatchToProps = function (dispatch) {

  const {
    searchEmail,
    signUserIn,
    signUserUp,
    resetSearch,
    getUserData,
    signInAsGuest
  } = sessionOperations;

  return {
    searchEmail: (email) => dispatch(searchEmail(email)),
    signIn: (props) => dispatch(signUserIn(props)),
    signUp: (props) => dispatch(signUserUp(props)),
    resetSearch: () => dispatch(resetSearch()),
    getUserData: (jwt, userId) => dispatch(getUserData(jwt, userId)),
    signInAsGuest: () => dispatch(signInAsGuest())
  };
};

const SessionContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionComponent);

export default SessionContainer;
