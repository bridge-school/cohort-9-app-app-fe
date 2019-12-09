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

const TypeDropdown = ({ value, onChange, options }) => {
  return (
    <Form.Group widths="equal" className="row">
      <select
        defaultValue={options[0]}
        onChange={onChange}
        value={value}
        className="sixteen wide column"
      >
        {options.map((option, index) => {
          return (
            <option
              key={index}
              value={option}
            >
              {option}
            </option>
          );
        })}
      </select>
    </Form.Group>
  );
};

export default TypeDropdown;