import { ACTION_TYPES } from "../actions/adminFormActions";

export const initialState = {
  cohortName: "",
  cohortType: "",
  isSubmitted: false,
  error: ""
};

const adminFormReducer = (state = initialState, action) => {
  switch (action.type) {
    //based on the action type updating the paylod
    case ACTION_TYPES.SET_COHORT_NAME:
      return {
        ...state,
        cohortName: action.payload
      };
    case ACTION_TYPES.SET_COHORT_TYPE:
      return {
        ...state,
        cohortType: action.payload
      };
    case ACTION_TYPES.SET_POST_SUCCESS:
      return {
        ...state,
        isSubmitted: true,
        error: ""
      };
    case ACTION_TYPES.SET_POST_ERROR:
      return {
        ...state,
        isSubmitted: false,
        error: action.payload
      };
    default:
      return state;
  }
};
export default adminFormReducer;
