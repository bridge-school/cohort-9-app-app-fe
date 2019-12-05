import React from 'react';
import { Button, Segment, Header} from 'semantic-ui-react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const AppListItem = ({key, cohortName, cohortType, link}) => {
    return (
        cohortName && (
            <Segment clearing padded as="li" key={key} data_test="appListItem_Segment">
                <Link to={link}>
                    <Header as='h2' floated='left'>{cohortName}</Header>
                    <Button data_test="appListItem_Button" floated='right' color={cohortType==="Backend Development" ? "blue" : cohortType==="Frontend Development" ? "pink" : "teal"}>
                        {cohortType}
                    </Button>
                </Link>
            </Segment>    
        )
    )
}
   
export default AppListItem;