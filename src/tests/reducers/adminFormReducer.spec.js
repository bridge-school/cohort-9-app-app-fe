import { ACTION_TYPES } from "../../redux/actions/adminFormActions";
import adminFormReducer from "../../redux/reducers/adminFormReducer";

describe("Reducer", () => {
  const defaultState = {
    cohortName: "",
    cohortType: ""
  };
  it("returns initial state", () => {
    expect(adminFormReducer(undefined, {})).toEqual(defaultState);
  });
  it("returns updated cohortName state", () => {
    const action = {
      type: ACTION_TYPES.SET_COHORT_NAME,
      payload: "Cohort 9"
    };
    const expectedState = {
      cohortName: "Cohort 9",
      cohortType: ""
    };
    expect(adminFormReducer(undefined, action)).toEqual(expectedState);
  });
  it("returns updated cohortType state", () => {
    const action = {
      type: ACTION_TYPES.SET_COHORT_TYPE,
      payload: "frontend"
    };
    const expectedState = {
      cohortName: "",
      cohortType: "frontend"
    };
    expect(adminFormReducer(undefined, action)).toEqual(expectedState);
  });
});


