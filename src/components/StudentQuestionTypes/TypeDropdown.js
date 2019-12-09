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

const TypeDropdown = (props) => {
  return (
    <Form.Group widths="equal" className="row">
      <select className="sixteen wide column">
        {props.options.map((option, index) => {
          return (
            <option key={index} value={option}>
              {option}
            </option>
          );
        })}
      </select>
    </Form.Group>
  );
}

export default TypeDropdown;