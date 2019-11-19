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
          minDate={new Date()}
        />
      </DatePickerLabelStyled>
      <DatePickerLabelStyled>
        <span> Date Closed </span>
        <DatePicker
          selected={datesClose}
          onChange={date => setDates(date, "datesClose")}
          minDate={addDays(datesOpen, 1)}
        />
      </DatePickerLabelStyled>
      <DatePickerLabelStyled>
        <span> Date of Response </span>
        <DatePicker
          selected={datesOfResponse}
          onChange={date => setDates(date, "datesOfResponse")}
          minDate={addDays(datesClose, 1)}
        />
      </DatePickerLabelStyled>
    </DatePickerContainerStyled>
  );
};

const mapStateToProps = state => ({
  datesOpen: state.dates.datesOpen,
  datesClose: state.dates.datesClose,
  datesOfResponse: state.dates.datesOfResponse
});

const mapDispatchToProps = dispatch => ({
  setDates: (dates, dateField) => dispatch(setDatesThunk(dates, dateField))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DatePickerContainer);
