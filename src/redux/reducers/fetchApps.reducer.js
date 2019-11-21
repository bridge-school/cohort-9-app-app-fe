const SET_APPS = "SET_APPS"
const SET_IS_LOADING = "SET_IS_LOADING"

export const INITIAL_STATE = {
  allApps: [],
  isLoading: true
};
    
// TODO: Write the reducer cases for API list
export const fetchAppsReducer = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case SET_IS_LOADING:
      return {
        ...state,
        isLoading: action.payload
      };
    case SET_APPS:
      return {
        ...state,
        allApps: action.payload
      };
    default: {
      return state;
    }
  }
};

//   useEffect(() => {
//     const fetchData = async () => { 
//       const res = await request("applications")
//       const data = await res.json();
//       console.log(data)
//       return res;      
//     };
//     fetchData();
//   });


