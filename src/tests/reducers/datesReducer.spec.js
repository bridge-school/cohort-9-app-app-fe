import React from "react";
import { exportAllDeclaration } from "@babel/types";
import { ACTION_TYPES } from "../../redux/actions/dateActions";
import datesReducer from "../../redux/reducers/datesReducer";

describe("Reducer", () => {
  const defaultState = {
    dateOpen: "",
    dateClose: "",
    dateOfResponse: ""
  };
  it("returns initial state", () => {
    expect(datesReducer(undefined, {})).toEqual(defaultState);
  });
  it("returns updated dateOpen state", () => {
    const action = {
      type: ACTION_TYPES.SET_DATES,
      payload: { date: "11/19/2019", dateField: "dateOpen" }
    };
    const expectedState = {
      dateOpen: "11/19/2019",
      dateClose: "",
      dateOfResponse: ""
    };
    expect(datesReducer(undefined, action)).toEqual(expectedState);
  });
  it("returns updated dateClose state", () => {
    const action = {
      type: ACTION_TYPES.SET_DATES,
      payload: { date: "11/20/2019", dateField: "dateClose" }
    };
    const expectedState = {
      dateOpen: "",
      dateClose: "11/20/2019",
      dateOfResponse: ""
    };
    expect(datesReducer(undefined, action)).toEqual(expectedState);
  });
  it("returns updated dateOfResponse state", () => {
    const action = {
      type: ACTION_TYPES.SET_DATES,
      payload: { date: "11/21/2019", dateField: "dateOfResponse" }
    };
    const expectedState = {
      dateOpen: "",
      dateClose: "",
      dateOfResponse: "11/21/2019"
    };
    expect(datesReducer(undefined, action)).toEqual(expectedState);
  });
});
