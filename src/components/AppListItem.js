import React from 'react';
import { Button, Segment, Header} from 'semantic-ui-react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const AppListItem = ({key, cohortName, cohortType, link}) => {
    
    return (
      cohortName && (
        <Segment as="li" clearing padded key={key}>
          <Header as="h2" floated="left">
            {cohortName}
          </Header>
          <Link to={link}>
            {/* as="Link" href={link} */}
            <Button
              floated="right"
              color={
                cohortType === "Backend Development"
                  ? "blue"
                  : cohortType === "Frontend Development"
                  ? "pink"
                  : "teal"
              }
            >
              {cohortType}
            </Button>
          </Link>
        </Segment>
      )
    );
}
   
export default AppListItem;