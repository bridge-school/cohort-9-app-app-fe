export const ACTION_TYPES = {
  SET_DATES: "SET_DATES",
  RESET_DATES: "RESET_DATES"
};

//Action creator to set the date
export const setDates = (date, dateField) => ({
  type: ACTION_TYPES.SET_DATES,
  payload: { date: date, dateField: dateField }
});

//Action creator to reset the date
export const resetDates = () => ({
  type: ACTION_TYPES.RESET_DATES
});
