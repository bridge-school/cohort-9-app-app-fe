import React from 'react';
import HeaderNav from './HeaderNav.js';
import styled from "styled-components";

const Wrapper = styled.div`
    max-width: 980px;
    margin: 0 auto;
    padding: 4rem 2rem 2rem 2rem;
    font-size: 16px;
`
const CommonLayout = ({children, isAdmin}) => {
  return (
    <div>
      <HeaderNav isAdmin={isAdmin} title={'Cohort Application'}/>
      <Wrapper>
        {children}
      </Wrapper>
    </div>
  )
}

export default CommonLayout;