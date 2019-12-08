import React from "react";
import { connect } from "react-redux";
import DatePicker from "react-datepicker";
import { setDates } from "../redux/actions/dateActions";
import "react-datepicker/dist/react-datepicker.css";
import "react-datepicker/dist/react-datepicker-cssmodules.css";
import { addDays } from "date-fns";

import {
  DatePickerContainerStyled,
  DatePickerLabelStyled
} from "./DatePickerContainerStyled";

const DatePickerContainer = ({
  dateOpen,
  dateClose,
  dateOfResponse,
  setDates
}) => {
  return (
    <DatePickerContainerStyled>
      <DatePickerLabelStyled>
        <span> Date Open </span>
        <DatePicker
          selected={dateOpen}
          onChange={date => setDates(date, "dateOpen")}
          //minimum date should be today date so user cannot select any day from previous
          minDate={new Date()}
          placeholderText="Click to select a date"
        />
      </DatePickerLabelStyled>
      <DatePickerLabelStyled>
        <span> Date Closed </span>
        <DatePicker
          selected={dateClose}
          onChange={date => setDates(date, "dateClose")}
          //Minimum date should be one day after close date at least
          minDate={addDays(dateOpen, 1)}
          placeholderText="Click to select a date"
        />
      </DatePickerLabelStyled>
      <DatePickerLabelStyled>
        <span> Date of Response </span>
        <DatePicker
          selected={dateOfResponse}
          onChange={date => setDates(date, "dateOfResponse")}
          //Minimum date should be one day after date of response at least
          minDate={addDays(dateClose, 1)}
          placeholderText="Click to select a date"
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

const mapDispatchToProps = {
  setDates
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DatePickerContainer);
