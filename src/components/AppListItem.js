import React from 'react';

const AppListItem = ({id, cohortName, cohortType, link}) => {
    return (
       <li key={id} >
           <p>{cohortName}</p>
           <a href={link}>
               {cohortType}
           </a>
       </li>        
    )
}
   
export default AppListItem;