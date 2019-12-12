import { ACTION_TYPES } from "../../redux/actions/getCohortApplicationByIdActions";
import getCohortApplicationByIdReducer from "../../redux/reducers/getCohortApplicationByIdReducer";

describe("Reducer", () => {
  const defaultState = {
    getCohortApplicationSuccess: false,
    getCohortApplicationError: null,
    cohortApplicationReceived: null,
    questionsReceived: [],
    questionsValues: [],
    questionsErrors: []
  };
  it("returns initial state", () => {
    expect(getCohortApplicationByIdReducer(undefined, {})).toEqual(
      defaultState
    );
  });

  it("returns state with a student form", () => {
    const formData = {
      cohortName: "cohort 9",
      cohortType: "Frontend Development",
      dateClose: "2019-12-24T05:00:00.000Z",
      // ... and other metadata
      questions: [
        {
          options: [],
          prompt: "What is your hobby?",
          type: "short-answer",
          isRequired: false
        },
        {
          options: ["watermelon", "orange", "kiwi", "apple"],
          prompt: "What is your favourite fruit?",
          type: "checkboxes",
          isRequired: true
        }
      ]
    };

    const action = {
      type: ACTION_TYPES.COHORT_APP_GET_SUCCESS,
      payload: formData
    };

    const expectedState = {
      ...defaultState,
      getCohortApplicationSuccess: true,
      cohortApplicationReceived: formData,
      questionsReceived: formData.questions,
      questionsValues: ["", ""],
      questionsErrors: ["", ""]
    };

    expect(getCohortApplicationByIdReducer(undefined, action)).toEqual(
      expectedState
    );
  });

  it("returns state with get student app error", () => {
    const getError = new Error("Unable to get student form data");
    const action = {
      type: ACTION_TYPES.COHORT_APP_GET_ERROR,
      payload: getError
    };

    const expectedState = {
      ...defaultState,
      getCohortApplicationError: getError
    };
    expect(getCohortApplicationByIdReducer(undefined, action)).toEqual(
      expectedState
    );
  });
});
