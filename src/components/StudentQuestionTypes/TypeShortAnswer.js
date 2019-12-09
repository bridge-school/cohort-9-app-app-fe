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

const TypeDropdown = props => {
  return (
    <Form.Group widths="equal" className="row">
      <Form.Field control={Input} maxLength="1000" />
    </Form.Group>
  );
};

export default TypeDropdown;
