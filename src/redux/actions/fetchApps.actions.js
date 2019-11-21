import { request } from "../../backend-request";

const SET_APPS = "SET_APPS"
const SET_IS_LOADING = "SET_IS_LOADING"    

export const setAllApps = (allApps = []) => ({
  type: SET_APPS,
  payload: allApps
});

export const setIsLoadingAllApps = (isLoading = false) => ({
  type: SET_IS_LOADING,
  payload: isLoading
});

// fetchAllAppsThunk
export const fetchAllApps = () => dispatch => {
  return async () => { 
    const res = await request("applications")
    const allApps = await res.json();
    await dispatch(setIsLoadingAllApps(false));
    await dispatch(setAllApps(allApps));
  } 
};
    
    