import React from "react";
import { connect } from "react-redux";
import DatePicker from "react-datepicker";
import { setDates } from "../redux/actions/dateActions";
import "react-datepicker/dist/react-datepicker.css";
import "react-datepicker/dist/react-datepicker-cssmodules.css";
import { addDays } from "date-fns";
import { Form } from 'semantic-ui-react'
import styled from "styled-components";

export const DatePickerLabel = styled.label`
  &~* {
    width: 100%;
  }
`;


const DatePickerContainer = ({
  dateOpen,
  dateClose,
  dateOfResponse,
  setDates
}) => {
  return (
    <Form.Group widths='equal'>
      <Form.Field>
        <DatePickerLabel>Date Open</DatePickerLabel>
        <DatePicker
          selected={dateOpen}
          onChange={date => setDates(date, "dateOpen")}
          //minimum date should be today date so user cannot select any day from previous
          minDate={new Date()}
          required={true}
        />
      </Form.Field>
      <Form.Field>
        <DatePickerLabel>Date Closed</DatePickerLabel>
        <DatePicker
          selected={dateClose}
          onChange={date => setDates(date, "dateClose")}
          //Minimum date should be one day after close date at least
          minDate={addDays(dateOpen, 1)}
          required={true}
        />
      </Form.Field>
      <Form.Field>
        <DatePickerLabel>Date of Response</DatePickerLabel>
        <DatePicker
          selected={dateOfResponse}
          onChange={date => setDates(date, "dateOfResponse")}
          //Minimum date should be one day after date of response at least
          minDate={addDays(dateClose, 1)}
          required={true}
        />
      </Form.Field>
    </Form.Group>
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
