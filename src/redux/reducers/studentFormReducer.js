import { ACTION_TYPES } from "../actions/studentFormActions";

export const initialState = {
  exampleFieldOne: "",
  exampleFieldTwo: "",
  formPostSuccess: false,
  formPostError: null
};

const studentFormReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    //based on the action type updating the paylod
    case ACTION_TYPES.STUDENT_FORM_POST_SUCCESS:
      const result = { 
        ...state,
        formPostSuccess: true,
      };
      return result;
    case ACTION_TYPES.STUDENT_FORM_POST_ERROR:
      return {
        ...state,
        formPostError: action.payload
      };
    default:
      return state;
  }
};
export default studentFormReducer;
