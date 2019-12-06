import React from 'react';
import { Button, Segment, Header} from 'semantic-ui-react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";



const AppListItem = ({id, cohortName, cohortType, link}) => { 
    return (
        cohortName && (
            <li key={id}>
                <Link to={link}>
                    <Segment clearing padded data_test="appListItem_Segment">
                        <Header as='h2' floated='left'>{cohortName}</Header>
                        <Button data_test="appListItem_Button" 
                                floated='right' 
                                color={cohortType==="Backend Development" ? "blue" : cohortType==="Frontend Development" ? "pink" : "teal"}>
                            {cohortType}
                        </Button>
                    </Segment> 
                </Link>
            </li>        
        )
    )
}
   
export default AppListItem;