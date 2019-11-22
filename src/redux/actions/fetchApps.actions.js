import { request } from "../../backend-request";

const SET_APPS = "SET_APPS"
const SET_IS_LOADING = "SET_IS_LOADING"    

export const setApps = (apps = []) => ({
  type: SET_APPS,
  payload: apps
});


export const setIsLoadingAllApps = (isLoading = false) => ({
  type: SET_IS_LOADING,
  payload: isLoading
});

// fetchAllAppsThunk
export const fetchAllApps = () => async dispatch => {
    const res = await request("applications")
    const apps = await res.json();
    await dispatch(setApps(apps));
    await dispatch(setIsLoadingAllApps(false));
};

