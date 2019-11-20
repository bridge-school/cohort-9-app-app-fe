import React from 'react';

import {
  InputField,
  InputLabel
} from './TextInputStyled';


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

export default TextInput;