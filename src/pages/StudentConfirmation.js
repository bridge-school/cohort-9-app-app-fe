import React, {useEffect} from 'react';
import {Header} from 'semantic-ui-react'

const Confirmation = ({cohortName, closeDate, responseDate}) => {    
  const pageTitle="Congratulations!"
  useEffect(() => {
    document.title = pageTitle
  }, []);
  return (
    <>
      <Header as="h1"><span role="img" aria-label="tada">🎉</span>{pageTitle}</Header>
      <p>`You have successfully submitted your application to {cohortName}. Applications will be open until {closeDate}. All applicants will hear back from the Bridge team by {responseDate}. 
          <span role="img" aria-label="tada">🎉</span>`
      </p>
    </>
  )
}

export default Confirmation;



