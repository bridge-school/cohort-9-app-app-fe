import { ACTION_TYPES } from "../actions/getCohortApplicationByIdActions";

export const initialState = {
    getCohortApplicationSuccess: false,
    getCohortApplicationError: null,
    cohortApplicationReceived: null,
    questionsReceived: [],
    questionsValues: [],
    questionsErrors: [],
};

const getCohortApplicationByIdReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ACTION_TYPES.COHORT_APP_GET_SUCCESS:
      return {
        ...state,
        getCohortApplicationSuccess: true,
        cohortApplicationReceived: action.payload,
        questionsReceived: action.payload.questions,
        // set initial values of inputs to empty strings
        questionsValues: action.payload.questions.map(q => ""),
        // set initial values of validation errors for inputs
        // to empty strings (which means: no error)
        questionsErrors: action.payload.questions.map(q => "")
      };
    case ACTION_TYPES.COHORT_APP_GET_ERROR:
      return {
        ...state,
        getCohortApplicationError: action.payload
      };
    default:
      return state;
  }
};

export default getCohortApplicationByIdReducer;
