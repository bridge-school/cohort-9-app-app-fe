import React from 'react';
import styled from 'styled-components';

const TextInput = ({ value, handleChange }) => {
  return (
    <div>
      <InputLabel>
        Cohort Name:
        <InputField 
          type="text" 
          value={value} 
          onChange={handleChange}
          maxLength="64"
        />
      </InputLabel>
    </div>
  );
}

const InputField = styled.input`
  width: 100%;
  height: 36px;
  border-radius: 8px;
  border-color: #ccc;
  background: #f4f4f4;
  color: #333;
`;

const InputLabel = styled.label`
  display: block;
  margin: 0 auto;
  width: 80%;
  text-align: left;
  color: #1e1e1e;
`;

export default TextInput;