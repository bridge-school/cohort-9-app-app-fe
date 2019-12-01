import { combineReducers } from "redux";
import datesReducer from "./datesReducer";
import adminFormReducer from "./adminFormReducer";
import { allCohortAppsReducer } from "./allCohortAppsReducer";

const rootReducer = combineReducers({
  dates: datesReducer,
  cohortInfo: adminFormReducer,
  apps: allCohortAppsReducer
});

export default rootReducer;
