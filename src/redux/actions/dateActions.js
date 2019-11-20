export const ACTION_TYPES = {
  SET_DATES: "SET_DATES"
};

//Action creator to set the date
export const setDates = (date, dateField) => ({
  type: ACTION_TYPES.SET_DATES,
  payload: { date: date, dateField: dateField }
});

//creating Thunk here
export const setDatesThunk = (date, dateField) => dispatch => {
  return dispatch(setDates(date, dateField));
};