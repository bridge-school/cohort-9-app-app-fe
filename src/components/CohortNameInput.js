import React from "react";

import {
  InputField,
  InputLabel
} from "./CohortNameInputStyled";


const CohortNameInput = (props) => {
  return (
    <div>
      <InputLabel>
        Cohort Name:
        <InputField
          type="text"
          value={props.value}
          onChange={props.handleChange}
          maxLength="64"
          placeholder="Enter Cohort Name"
          required
        />
      </InputLabel>
    </div>
  );
};

export default CohortNameInput;
