import React from "react";

<<<<<<< HEAD:src/components/CohortNameInput.js
import {
  InputField,
  InputLabel
} from "./CohortNameInputStyled";


const CohortNameInput = (props) => {
=======
import { InputField, InputLabel } from "./TextInputStyled";

const TextInput = props => {
>>>>>>> 8cea5c9263055c49af59d179b675fc2484057e6f:src/components/TextInput.js
  return (
    <div>
      <InputLabel>
        Cohort Name:
        <InputField
          type="text"
          value={props.value}
          onChange={props.handleChange}
          maxLength="64"
<<<<<<< HEAD:src/components/CohortNameInput.js
=======
          placeholder="Enter Cohort Name"
>>>>>>> 8cea5c9263055c49af59d179b675fc2484057e6f:src/components/TextInput.js
          required
        />
      </InputLabel>
    </div>
  );
};

<<<<<<< HEAD:src/components/CohortNameInput.js
export default CohortNameInput;
=======
export default TextInput;
>>>>>>> 8cea5c9263055c49af59d179b675fc2484057e6f:src/components/TextInput.js
