import React from "react";
import { Form } from 'semantic-ui-react'

const CohortNameInput = (props) => {
  return (
    <Form.Field required>
      <label>Cohort Name:</label>
      <input
          type="text"
          value={props.value}
          onChange={props.handleChange}
          maxLength="64"
          required
        />
    </Form.Field>
  );
};

export default CohortNameInput;
