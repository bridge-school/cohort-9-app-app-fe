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

const TypeParagraph = ({ value, onChange }) => {
  return (
    <Form.Group widths="equal">
      <TextArea 
        maxLength="1000" 
        className="sixteen wide column" 
        value={value} 
        onChange={onChange}
      />
    </Form.Group>
  );
};

export default TypeParagraph;
