import React from 'react';
import Header from '../Header/Header';
import {Wrapper} from './CommonLayoutStyled'
const CommonLayout = ({children, isAdmin}) => {
  return (
    <div>
      <Header isAdmin={isAdmin} title={'Cohort Application'}/>
      <Wrapper>
        {children}
      </Wrapper>
    </div>
  )
}

export default CommonLayout;