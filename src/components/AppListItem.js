import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const AppListItem = ({key, cohortName, cohortType, link}) => {
    return (
       <li key={key}>
           <p>{cohortName}</p>
           <Link to="/student/application"> {cohortType}</Link>
       </li>        
    )
}
   
export default AppListItem;