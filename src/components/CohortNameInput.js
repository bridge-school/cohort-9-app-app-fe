import React from "react";
import styled from "styled-components";

import {
  InputField,
  InputLabel
} from "./CohortNameInputStyled";


const CohortNameInput = (props) => {
  return (
    <label>
      Cohort Name:
      <InputField
        type="text"
        value={props.value}
        onChange={props.handleChange}
        maxLength="64"
        placeholder="Enter Cohort Name"
        required
      />
    </label>
  );
};

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

export default CohortNameInput;
