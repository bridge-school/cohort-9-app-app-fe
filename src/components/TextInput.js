import React from "react";
import { Form } from "semantic-ui-react";

const TextInput = (props) => {
  return (
    <Form.Field>
      <label>
        Cohort Name:
        <input 
          type="text" 
          value={props.value} 
          onChange={props.handleChange}
          maxLength="64"
        />
      </label>
    </Form.Field>
  );
}

export default TextInput;