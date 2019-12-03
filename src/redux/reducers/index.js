import { combineReducers } from "redux";
import datesReducer from "./datesReducer";
import adminFormReducer from "./adminFormReducer";
import studentFormReducer from "./studentFormReducer";
import allCohortAppsReducer from "./allCohortAppsReducer";

const rootReducer = combineReducers({
  dates: datesReducer,
  cohortInfo: adminFormReducer,
  studentForm: studentFormReducer,
  apps: allCohortAppsReducer
});

export default rootReducer;
