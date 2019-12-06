import React from "react";
import AppListItem from "./AppListItem.js";
import { AppListStyled } from "./AppListStyled";
import moment from "moment";

const StudentsAppsList = ({ apps }) => {
  // Added filter function to filter cohorts which their close date is less than current date
  const getFilteredCohort = ({ apps }) => {
    return apps.filter(app => {
      const dateClose = moment(app.dateClose, "YYYY-MM-DDTHH:mm:ss.SSSZ");
      const now = moment();
      console.log("now is " + now);
      console.log("dateLimit is " + dateClose);
      return dateClose.isValid() && now.isBefore(dateClose);
    });
  };
  return (
    <>
      <AppListStyled>
        {getFilteredCohort({ apps }).map(li => {
          const { id, cohortName, cohortType } = li;
          return (
            <AppListItem
              id={id}
              key={id}
              cohortName={cohortName}
              cohortType={cohortType}
              link={`/student/application/${id}`}
            />
          );
        })}
      </AppListStyled>
    </>
  );
};

export default StudentsAppsList;
