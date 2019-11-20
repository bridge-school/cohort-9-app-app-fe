const FETCH_APPLICATIONS = 'FETCH_APPLICATIONS';

//  It checks if the action type is FETCH_APPLICATIONS 
// and if it is it updates the list of our Applications
export default (state = {}, action) => {
    switch(action.type) {
      case FETCH_APPLICATIONS:
        return action.payload;
      default: 
        return state;
    }
  };