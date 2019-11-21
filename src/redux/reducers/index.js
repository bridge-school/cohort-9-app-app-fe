import { combineReducers } from "redux";
// import datesReducer from "./datesReducer";
import {fetchAppsReducer} from "./fetchApps.reducer";

const rootReducer = combineReducers({
  // dates: datesReducer,
  allApps: fetchAppsReducer,
});

export default rootReducer;
