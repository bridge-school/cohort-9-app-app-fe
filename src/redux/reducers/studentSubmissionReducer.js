import { ACTION_TYPES } from "../actions/studentSubmissionActions";

export const initialState = {
  formPostSuccess: false,
  formPostError: null,
  studentName: "",
  studentEmail: "",
  questionsReceived: [],
  questionsValues: [],
  questionsErrors: [],
};

const studentSubmissionReducer = (state = initialState, action = {}) => {
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
    case ACTION_TYPES.SET_STUDENT_NAME: 
      return {
        ...state,
        studentName: action.payload
      };
    case ACTION_TYPES.SET_STUDENT_EMAIL: 
      return {
        ...state,
        studentEmail: action.payload
      };
    case ACTION_TYPES.SET_QUESTION_VALUE:
      let questionsValues = [...state.questionsValues];
      questionsValues[action.payload.index] = action.payload.value;
      
      return {
        ...state,
        questionsValues
      };
    case ACTION_TYPES.SET_QUESTION_ERROR:
      let questionsErrors = [...state.questionsErrors];
      questionsErrors[action.payload.index] = action.payload.error;

      return {
        ...state,
        questionsErrors
      };
    case ACTION_TYPES.RESET_QUESTION_ERROR:
      let questionsErrorsWithReset = [...state.questionsErrors];
      questionsErrorsWithReset[action.payload] = "";

      return {
        ...state,
        questionsErrors: questionsErrorsWithReset
      };
    default:
      return state;
  }
};

export default studentSubmissionReducer;
