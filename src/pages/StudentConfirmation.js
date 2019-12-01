import React from 'react';

const Confirmation = ({cohortName, closeDate, responseDate}) => {    
  return (
    <>
      <h1><span role="img" aria-label="tada">🎉</span>Congratulations!</h1>
      <p>`You have successfully submitted your application to {cohortName}. Applications will be open until {closeDate}. All applicants will hear back from the Bridge team by {responseDate}. 
          <span role="img" aria-label="tada">🎉</span>`
      </p>
    </>
  )
}

export default Confirmation;



