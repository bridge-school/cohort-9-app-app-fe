import { 
  ACTION_TYPES
} from "../actions/adminFormActions";

export const initialState = {
  cohortName: "",
  cohortType: "",
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
    default:
      return state;
  }
}; 
export default adminFormReducer;
