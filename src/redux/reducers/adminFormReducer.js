import { ACTION_TYPES } from "../actions/adminFormActions";

export const initialState = {
  cohortName: "",
  cohortType: "",
  isSubmitted: false,
  error: "",
  questionsData: []
};

const adminFormReducer = (state = initialState, action = {}) => {
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
    case ACTION_TYPES.SET_RESET_APP:
      return {
        ...initialState
      };
    case ACTION_TYPES.RESET_IS_SUBMITTED:
      return {
        ...state,
        isSubmitted: false
      };
    // Reducer case for when a new question is generated
    case ACTION_TYPES.ADD_NEW_QUESTION:
      return {
        ...state,
        questionsData: [
          // make sure to make a copy of all previously
          // created questions
          ...state.questionsData,
          {
            propmt: "",
            type: "short-answer",
            isRequired: false,
            optionsString: ""
          }
        ]
      };
    // Reducer cases for question fields
    case ACTION_TYPES.SET_QUESTION_PROMPT:
      // take the current state of questionsData in state
      // spread operator is used to create a copy of array
      // to avoid mutating the data in state
      let dataForPrompt = [...state.questionsData];

      // modify the prompt of the question
      // at particular index of the 'questionsData' array
      dataForPrompt[action.payload.index] = {
        ...dataForPrompt[action.payload.index],
        prompt: action.payload.questionPrompt
      };
      return {
        ...state,
        questionsData: dataForPrompt
      };
    case ACTION_TYPES.QUESTION_TYPE:
      let dataForType = [...state.questionsData];

      dataForType[action.payload.index] = {
        ...dataForType[action.payload.index],
        type: action.payload.questionType
      };
      return {
        ...state,
        questionsData: dataForType
      };
    case ACTION_TYPES.SET_QUESTION_REQUIRED:
      let dataForRequired = [...state.questionsData];

      dataForRequired[action.payload.index] = {
        ...dataForRequired[action.payload.index],
        isRequired: action.payload.isRequired
      };
      return {
        ...state,
        questionsData: dataForRequired
      };
    case ACTION_TYPES.SET_QUESTION_OPTIONS:
      let dataForOptions = [...state.questionsData];

      dataForOptions[action.payload.index] = {
        ...dataForOptions[action.payload.index],
        optionsString: action.payload.questionOptions
      };
      return {
        ...state,
        questionsData: dataForOptions
      };
    case ACTION_TYPES.DELETE_QUESTION:
      // let dataForDelete = [...state.questionsData];
      let deleteIndex = action.payload.index;

      let dataForDelete = [
        ...state.questionsData.slice(0, deleteIndex),
        ...state.questionsData.slice(deleteIndex + 1)
      ];
      return {
        ...state,
        questionsData: dataForDelete
      };
    default:
      return state;
  }
};
export default adminFormReducer;
