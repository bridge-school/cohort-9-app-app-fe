import { combineReducers } from "redux";
import datesReducer from "./datesReducer";
import adminFormReducer from "./adminFormReducer";
// import studentFormReducer from "./studentFormReducer";
import allCohortAppsReducer from "./allCohortAppsReducer";
// import cohortAppReducer from "./cohortAppReducer";
import getCohortApplicationByIdReducer from "./getCohortApplicationByIdReducer"
import studentSubmissionReducer from "./studentSubmissionReducer"

const rootReducer = combineReducers({
  dates: datesReducer,
  cohortInfo: adminFormReducer,
  cohortApplication: getCohortApplicationByIdReducer,
  studentSubmission: studentSubmissionReducer,
  apps: allCohortAppsReducer,

});

export default rootReducer;
