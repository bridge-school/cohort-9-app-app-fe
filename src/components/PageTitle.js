import React from 'react';
import styled from "styled-components";

const PageTitle = (props) => {
  return (
    <Title>{props.children}</Title>
  );
}

const Title = styled.h1`
  width: 100%;
  text-align: left;
  font-size: 35px;
  font-weight: 800;
  color: #333;
  margin-bottom: 40px;
`;

export default PageTitle;
