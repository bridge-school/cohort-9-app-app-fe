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

const TypeDropdown = ({ value, onChange }) => {
  return (
    <Form.Group widths="equal" className="row">
      <Form.Field 
        control={Input} 
        maxLength="1000" 
        value={value}
        onChange={onChange}
      />
    </Form.Group>
  );
};

export default TypeDropdown;
