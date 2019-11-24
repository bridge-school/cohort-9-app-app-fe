import { combineReducers } from "redux";
import datesReducer from "./datesReducer";
import {fetchAppsReducer} from "./fetchApps";
import adminFormReducer from "./adminFormReducer";

const rootReducer = combineReducers({
  dates: datesReducer,
  cohortInfo: adminFormReducer,
  apps: fetchAppsReducer,
});

export default rootReducer;
