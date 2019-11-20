import React from "react";
import { connect } from "react-redux";
import DatePicker from "react-datepicker";
import { setDatesThunk } from "../redux/actions/dateActions";
import "react-datepicker/dist/react-datepicker.css";
import "react-datepicker/dist/react-datepicker-cssmodules.css";
import { addDays } from "date-fns";

import {
  DatePickerContainerStyled,
  DatePickerLabelStyled
} from "./DatePickerContainerStyled";

const DatePickerContainer = ({
  datesOpen,
  datesClose,
  datesOfResponse,
  setDates
}) => {
  return (
    <DatePickerContainerStyled>
      <DatePickerLabelStyled>
        <span> Date Open </span>
        <DatePicker
          selected={datesOpen}
          onChange={date => setDates(date, "datesOpen")}
          //minimum date should be today date so user cannot select any day from previous
          minDate={new Date()}
        />
      </DatePickerLabelStyled>
      <DatePickerLabelStyled>
        <span> Date Closed </span>
        <DatePicker
          selected={datesClose}
          onChange={date => setDates(date, "datesClose")}
          //Minimum date should be one day after close date at least
          minDate={addDays(datesOpen, 1)}
        />
      </DatePickerLabelStyled>
      <DatePickerLabelStyled>
        <span> Date of Response </span>
        <DatePicker
          selected={datesOfResponse}
          onChange={date => setDates(date, "datesOfResponse")}
          //Minimum date should be one day after date of response at least
          minDate={addDays(datesClose, 1)}
        />
      </DatePickerLabelStyled>
    </DatePickerContainerStyled>
  );
};

const mapStateToProps = state => ({
  dateOpen: state.dates.dateOpen,
  dateClose: state.dates.dateClose,
  dateOfResponse: state.dates.dateOfResponse
});

const mapDispatchToProps = dispatch => ({
  setDates: (dates, dateField) => dispatch(setDatesThunk(dates, dateField))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DatePickerContainer);
