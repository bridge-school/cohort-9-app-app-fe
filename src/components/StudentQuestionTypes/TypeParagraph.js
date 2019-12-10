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

const TypeParagraph = ({ val, onChange, error }) => {
  return (
    <>
      {error !== "" && <ErrorMessage>{error}</ErrorMessage>}
      <Form.Group widths="equal">
        <TextArea
          maxLength="1000"
          className={`sixteen wide column`}
          value={val}
          onChange={onChange}
          error={error !== ""}
        />
      </Form.Group>
    </>
  );
};

const ErrorMessage = styled.p`
  color: red;
  margin-bottom: 10px;
`;

export default TypeParagraph;
