import React from "react";
import {
  Form,
  TextArea,
  Message
} from "semantic-ui-react";

const TypeParagraph = ({ val, onChange, error, prompt, isRequired }) => {
  return (
    <>
      {error !== undefined && error !== "" && <Message>{error}</Message>}
      <Form.Field >
        <label>{prompt}</label>
        <TextArea
          maxLength="1000"
          value={val}
          onChange={onChange}
          error={error !== ""}
          required={isRequired}
        />
      </Form.Field>
    </>
  );
};

export default TypeParagraph;
