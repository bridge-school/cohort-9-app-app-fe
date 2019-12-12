import { ACTION_TYPES } from "../../redux/actions/studentSubmissionActions";
import studentSubmissionReducer from "../../redux/reducers/studentSubmissionReducer";

describe("Reducer", () => {
  const defaultState = {
    studentName: "",
    studentEmail: "",
    questionsReceived: [],
    questionsValues: [],
    questionsErrors: [],
    formPostSuccess: false,
    formPostError: null,
  };
  it("returns initial state", () => {
    expect(studentSubmissionReducer(undefined, {})).toEqual(defaultState);
  });

  it("returns state with updated student name", () => {
    const action = {
      type: ACTION_TYPES.SET_STUDENT_NAME,
      payload: "Jane"
    };
    const expectedState = {
      ...defaultState,
      studentName: "Jane"
    };
    expect(studentSubmissionReducer(undefined, action)).toEqual(expectedState);
  });
  it("returns state with updated student email", () => {
    const action = {
      type: ACTION_TYPES.SET_STUDENT_EMAIL,
      payload: "jane@mail.com"
    };
    const expectedState = {
      ...defaultState,
      studentEmail: "jane@mail.com"
    };
    expect(studentSubmissionReducer(undefined, action)).toEqual(expectedState);
  });

  it("returns state with updated question value", () => {
    const testVal = "test value";

    const action = {
      type: ACTION_TYPES.SET_QUESTION_VALUE,
      payload: {
        value: testVal,
        index: 1
      }
    };
    const newState = {
      ...defaultState,
      questionsValues: ["", ""]
    };

    const expectedState = {
      ...newState,
      questionsValues: ["", testVal]
    };
    expect(studentSubmissionReducer(newState, action)).toEqual(expectedState);
  });

  it("returns state with updated error value", () => {
    const sampleErrorMsg = "This field is required";

    const action = {
      type: ACTION_TYPES.SET_QUESTION_ERROR,
      payload: {
        error: sampleErrorMsg,
        index: 2
      }
    };
    const newState = {
      ...defaultState,
      questionsErrors: ["", "", ""]
    };

    const expectedState = {
      ...newState,
      questionsErrors: ["", "", sampleErrorMsg]
    };
    expect(studentSubmissionReducer(newState, action)).toEqual(expectedState);
  });

  it("returns state with a reset error", () => {
    const action = {
      type: ACTION_TYPES.RESET_QUESTION_ERROR,
      payload: 1
    };
    const newState = {
      ...defaultState,
      questionsErrors: ["error[0]", "error[1]", ""]
    };

    const expectedState = {
      ...newState,
      questionsErrors: ["error[0]", "", ""]
    };
    expect(studentSubmissionReducer(newState, action)).toEqual(expectedState);
  });

  it("returns state with student form post success", () => {
    const action = {
      type: ACTION_TYPES.STUDENT_FORM_POST_SUCCESS,
    };

    const expectedState = {
      ...defaultState,
      formPostSuccess: true
    };
    expect(studentSubmissionReducer(undefined, action)).toEqual(expectedState);
  });

  it("returns state with student form post error", () => {
    const postError = new Error("Unable to save student responses")
    const action = {
      type: ACTION_TYPES.STUDENT_FORM_POST_ERROR,
      payload: postError
    };

    const expectedState = {
      ...defaultState,
      formPostError: postError
    };
    expect(studentSubmissionReducer(undefined, action)).toEqual(expectedState);
  });
});
