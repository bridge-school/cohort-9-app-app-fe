export const ACTION_TYPES = {
  SET_DATES: "SET_DATES"
};

export const setDates = (date, dateField) => ({
  type: ACTION_TYPES.SET_DATES,
  payload: { date: date, dateField: dateField }
});

export const setDatesThunk = (date, dateField) => dispatch => {
  return dispatch(setDates(date, dateField));
};
