import { 
  SET_COHORT_NAME, 
  SET_COHORT_TYPE 
} from "../actions/adminFormActions";

export const initialState = {
  cohortName: "",
  cohortType: "",
};

const adminFormReducer = (state = initialState, action) => {
  switch (action.type) {
    //based on the action type updating the paylod
    case SET_COHORT_NAME:
      return {
        ...state,
        cohortName: action.payload
      };
    case SET_COHORT_TYPE:
      return {
        ...state,
        cohortType: action.payload
      };
    default:
      return state;
  }
}; 
export default adminFormReducer;
