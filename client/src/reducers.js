import { combineReducers } from "redux";

import sessionReducer from "./app/session/duck";

const rootReducer = combineReducers({
  session: sessionReducer
});

export default rootReducer;
