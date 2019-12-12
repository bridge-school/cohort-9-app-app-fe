import React from "react";
import {
  Form,
  Input,
  // Message
} from "semantic-ui-react";


const TypeShortAnswer = ({ val, onChange, error, prompt, isRequired}) => {
  console.log(prompt)
  return (
    <>
      {/* {error !== undefined && <Message>{error}</Message>} */}
      <Form.Group widths="equal" className="row">
        <Form.Field
          label={prompt}
          control={Input}
          maxLength="1000"
          value={val}
          onChange={onChange}
          required={isRequired}
        />
      </Form.Group>
    </>
  );
};

export default TypeShortAnswer;
