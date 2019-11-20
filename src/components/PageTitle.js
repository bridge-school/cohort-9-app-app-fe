import React from 'react';

import { Title } from "./PageTitleStyled";

const PageTitle = (props) => {
  return (
    <Title>{props.children}</Title>
  );
}

export default PageTitle;
