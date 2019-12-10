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

const TypeCheckbox = ({ val, options, onChange, error }) => {
  return (
    <>
      {error !== "" && <ErrorMessage>{error}</ErrorMessage>}
      <Form.Group widths="equal">
        <OptionsContainer>
          {options.map((option, index) => {
            const handleOnClick = e => {
              e.preventDefault();
              onChange(option);
            };

            return (
              <OptionButton
                key={index}
                onClick={handleOnClick}
                isSelected={val === option}
              >
                {option}
              </OptionButton>
            );
          })}
        </OptionsContainer>
      </Form.Group>
    </>
  );
};

const OptionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ErrorMessage = styled.p`
  color: red;
  margin-bottom: 10px;
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

  ${props => props.isSelected ? `background: grey;` : `` }
`;

export default TypeCheckbox;
