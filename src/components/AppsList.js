import React from 'react';

import AppListItem from "./AppListItem.js"
import {AppListStyled} from "./AppListStyled"
import { Button, Grid, Table } from 'semantic-ui-react'

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