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

const TypeCheckbox = props => {
  return (
    <Form.Group widths="equal">
      <OptionsContainer>
        {props.options.map((option, index) => (
          <OptionButton key={index}>{option}</OptionButton>
        ))}
      </OptionsContainer>
    </Form.Group>
  );
};

const OptionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const OptionButton = styled.button`
  max-width: 25%;
  padding: 5px 10px;
  background: white;
  outline: none;
  border-radius: 5px;
  color: #ccc;
  font-weight: 600;
  border: 2px solid #ccc;
  cursor: pointer;
`;

export default TypeCheckbox;
