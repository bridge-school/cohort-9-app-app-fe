import { request, requestWithParam } from "../../backend-request";

export const ACTION_TYPES = {
  SET_APP: "SET_APP",
  SET_IS_LOADING: "SET_IS_LOADING"
};

export const setApp = (app = []) => ({
  type: ACTION_TYPES.SET_APP,
  payload: app
});

export const setIsLoadingApp = (isLoading = false) => ({
  type: ACTION_TYPES.SET_IS_LOADING,
  payload: isLoading
});

// fetchAppThunk
export const fetchAppById = (id) => async dispatch => {
  const res = await request(`applications/${id}`);
  const app = await res.json();
  await dispatch(setApp(app));
  await dispatch(setIsLoadingApp(false));
};


