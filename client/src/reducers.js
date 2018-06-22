import { combineReducers } from "redux";

import sessionReducer from "./app/session/duck";
import ratesReducer from "./app/rates/duck";

const rootReducer = combineReducers({
  session: sessionReducer,
  rates: ratesReducer
});

export default rootReducer;
