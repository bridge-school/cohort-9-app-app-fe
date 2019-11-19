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
  margin-top: 10px;
  border-radius: 8px;
  border-color: #ccc;
  background: #f4f4f4;
  color: #333;
  font-size: 16px;
  padding-left: 10px;
`;

const InputLabel = styled.label`
  display: block;
  width: 100%;
  text-align: left;
  color: #1e1e1e;
  font-weight: 700;
  margin-bottom: 20px;
`;

export default TextInput;