import allCohortAppsReducer from "../../redux/reducers/allCohortAppsReducer"
import {ACTION_TYPES} from "../../redux/actions/allCohortAppsActions"

const {SET_APPS, SET_IS_LOADING} = ACTION_TYPES;

const reducer = allCohortAppsReducer;
const INITIAL_STATE = {
    apps: {
      cohort_apps: []
    },
    isLoading: true
};

describe("Get Apps Reducer", () => {
    it("returns initial state", () => {
        expect(reducer(undefined, {})).toEqual(INITIAL_STATE);
    });
    describe("When fetchAllApps thunk is dispatched", () => {
        it("updates the apps with the result json", () => {
          const setApps = {
            type: SET_APPS,
            payload: { cohort_apps: [ {id: "status", value: ["all"]}]}
          };
          const expectedState = {
            apps: { cohort_apps: [ {id: "status", value: ["all"]}]},
            isLoading: true
          };
          expect(reducer(undefined, setApps)).toEqual(expectedState);
        });
        it("updates loading state to false", () => {
            const setIsLoadingAllApps = {
              type: SET_IS_LOADING,
              payload: false
            };
            const expectedState = {
              ...INITIAL_STATE,
              isLoading: false
            };
            expect(reducer(undefined, setIsLoadingAllApps)).toEqual(expectedState);
          });
    });
});

