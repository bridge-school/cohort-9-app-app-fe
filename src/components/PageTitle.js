import React from "react";

import { Title } from "./PageTitleStyled";

const PageTitle = ({ children }) => {
  return (
    <Title>{children}</Title>
  );
}

export default PageTitle;
