import React from 'react';
import AppListItem from "./AppListItem.js"
import {AppListStyled} from "./AppListStyled"

const AppsList = ({apps}) => { 
    return (
        <>
        <h1>Cohort Application Forms</h1>
        <AppListStyled> 
            {apps.map(li => {
                const {id, cohortName, cohortType, link} = li
                return (
                 <AppListItem 
                    key={id}
                    cohortName={cohortName}
                    cohortType={cohortType}
                    link={link}
                 />
                )
            })}     
        </AppListStyled>
        </>
    )
}
   
export default AppsList;