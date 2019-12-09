import { combineReducers } from "redux";
import datesReducer from "./datesReducer";
import adminFormReducer from "./adminFormReducer";
import studentFormReducer from "./studentFormReducer";
import allCohortAppsReducer from "./allCohortAppsReducer";
import cohortAppReducer from "./cohortAppReducer";

const rootReducer = combineReducers({
  dates: datesReducer,
  cohortInfo: adminFormReducer,
  studentForm: studentFormReducer,
  apps: allCohortAppsReducer,
  app: cohortAppReducer,
});

export default rootReducer;
