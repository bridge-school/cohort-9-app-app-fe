import React from "react";
import {
  Button,
  Form,
  Message
} from "semantic-ui-react";
import styled from 'styled-components';

const TypeCheckbox = ({ val, options, onChange, error, prompt, isRequired }) => {
  const Checkbox = styled.input`
    position: absolute !important;
    height: 1px; 
    width: 1px;
    overflow: hidden;
    clip: rect(1px 1px 1px 1px); 
    clip: rect(1px, 1px, 1px, 1px);
    white-space: nowrap;
  `;
  
  return (
    <>
      {error !== "" && error !== undefined && <Message negative>{error}</Message>}
      <Form.Field required={isRequired}>
          <label>{prompt}</label>
          <Form.Group widths="equal">
            {options.map((option, index) => {
              
              return (
                <>
                  <Button  
                    fluid
                    basic 
                    as="label" 
                    isSelected={option===val} 
                    tertiary 
                    size="large" 
                    padded htmlFor={`${index}_${option}`}>
                    {option}
                  </Button>
                  <Checkbox type='checkbox'
                    id={`${index}_${option}`}
                    name={option}
                    value={option}
                    onChange={onChange}
                  />
                </>
              );
            })}
          </Form.Group>

      </Form.Field>
    </>
  );
};

export default TypeCheckbox;
