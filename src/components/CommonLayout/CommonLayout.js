import React from 'react';
import Header from '../Header/Header';

const CommonLayout = ({children, isAdmin}) => {
  return (
    <div>
      <Header isAdmin={isAdmin}/>
      {children}
    </div>
  )
}

export default CommonLayout;