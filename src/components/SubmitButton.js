import React from "react";
import styled from "styled-components";

const SubmitButton = ({ children }) => {
  return (
    <ButtonContainer>
      <Button type="submit" value={children} />
    </ButtonContainer>
  );
}

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.input`
  width: 350px;
  padding: 15px 40px;
  font-size: 18px;
  text-transform: uppercase;
  font-weight: 700;
  color: #fff;
  border: 1px solid #08c39d;
  border-radius: 8px;
  background-color: #08c39d;
  transition: all 0.3s ease-in;
  margin-top: 60px;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

export default SubmitButton;
