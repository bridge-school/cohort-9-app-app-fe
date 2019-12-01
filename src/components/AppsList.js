import React from 'react';
import AppListItem from "./AppListItem.js"
import {AppListStyled} from "./AppListStyled"

const AppsList = ({apps}) => { 
    return (
        <>
        <AppListStyled> 
            {apps.map(li => {
                const {id, cohortName, cohortType, link} = li
                return (
                 <AppListItem 
                    id={id}
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