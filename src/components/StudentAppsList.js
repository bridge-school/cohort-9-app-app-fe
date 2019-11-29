import React from 'react';
import AppListItem from "./AppListItem.js"
import {AppListStyled} from "./AppListStyled"

const AppsList = ({apps}) => { 
    return (
        <>
        <AppListStyled> 
            {apps.map(li => {
                const {id, cohortName, cohortType} = li
                return (
                 <AppListItem 
                    key={id}
                    cohortName={cohortName}
                    cohortType={cohortType}
                    
                 />
                )
            })}     
        </AppListStyled>
        </>
    )
}
   
export default AppsList;