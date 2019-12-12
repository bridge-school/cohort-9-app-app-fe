import React from 'react';
import AppListItem from "./AppListItem.js"
import { Button, Grid, Table } from 'semantic-ui-react'
import styled from "styled-components";

const AppListStyled = styled.ul`
  margin: 0;
  margin-top: 6rem;
  padding: 0;
  li {
    list-style: none;
    margin-bottom: 1rem;
    a, .segment {
      display: inline-block;
      width: 100%;
    }
    .segment {
      vertical-align: middle;
      .header {
        margin-bottom: 0;
      }
    }
  }
`;

const AppsList = ({ apps, isAdmin }) => { 
  return (
    <AppListStyled>
        {apps.map(li => {
            const {id, cohortName, cohortType} = li;
            return (
              <AppListItem
                id={id}
                cohortName={cohortName}
                cohortType={cohortType}
                isAdmin={isAdmin}
              />
            );
        })}  
    </AppListStyled>
  )
}

export default AppsList;