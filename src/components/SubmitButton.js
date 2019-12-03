import React from "react";

import { Button, ButtonContainer } from "./SubmitButtonStyled";

const SubmitButton = ({ children }) => {
  return (
    <ButtonContainer>
      <Button type="submit" value={children} />
    </ButtonContainer>
  );
}

export default SubmitButton;
