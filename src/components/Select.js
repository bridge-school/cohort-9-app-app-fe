import React from "react";

import { SelectDropdown, SelectLabel } from "./SelectStyled";

const Select = ({ value, handleChange, options }) => {
  return (
    <div>
      <SelectLabel>
        Cohort Type:
        <SelectDropdown required value={value} onChange={handleChange}>
          <option value>
            {""}
            -- select an option --{" "}
          </option>

          {options.map(option => {
            return (
              <option value={option.value} key={option.value}>
                {option.displayedName}
              </option>
            );
          })}
        </SelectDropdown>
      </SelectLabel>
    </div>
  );
};

export default Select;
