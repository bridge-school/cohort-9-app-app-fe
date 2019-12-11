import React from "react";
import {
  Button,
  Checkbox,
  Select,
  Form,
  Input,
  TextArea,
  Label
} from "semantic-ui-react";
import styled from "styled-components";

const TypeShortAnswer = ({ val, onChange, error }) => {
  return (
    <>
      {error !== "" && <ErrorMessage>{error}</ErrorMessage>}
      <Form.Group widths="equal" className="row">
        <Form.Field
          control={Input}
          maxLength="1000"
          value={val}
          onChange={onChange}
          // error={error !== ""}
        />
      </Form.Group>
    </>
  );
};

const ErrorMessage = styled.p`
  color: red;
  margin-bottom: 10px;
`;

export default TypeShortAnswer;
