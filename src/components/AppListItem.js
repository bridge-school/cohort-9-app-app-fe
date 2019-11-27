import React from 'react';

const AppListItem = ({key, cohortName, cohortType, link}) => {
    return (
       <li key={key}>
           <p>{cohortName}</p>
           <a href={link}>
               {cohortType}
           </a>
       </li>        
    )
}
   
export default AppListItem;