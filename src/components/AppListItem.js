import React from 'react';
import { Button, Segment, Header} from 'semantic-ui-react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const AppListItem = ({key, cohortName, cohortType, link}) => {
    return (
        <Segment as="li" clearing padded key={key}>
            <Header as='h2' floated='left'>{cohortName}</Header>
            <Button  floated='right' as={Link} link={link} color={cohortType==="Backend Development" ? "blue" : cohortType==="Frontend Development" ? "pink" : "teal"}>
                {cohortType}
            </Button>
        </Segment>
    )
}
   
export default AppListItem;