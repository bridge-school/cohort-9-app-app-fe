import React from "react";
import { Form } from 'semantic-ui-react'

const SelectInput = ({ value, handleChange, options }) => {
  return (
    <Form.Field label='Select Cohort Type' control='select' value={value} onChange={handleChange} required>
      <option value="select an option">-- select an option --</option>
      {options.map(option => {
          return (
            <option value={option.value} key={option.value}>
              {option.displayedName}
            </option>
          );
      })}
    </Form.Field>
  );
};

export default SelectInput;
