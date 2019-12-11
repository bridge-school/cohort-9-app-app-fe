export const filterFormData = (arr, id) => arr.filter(obj => obj.id === id);
export const filterDuplicateCohorts = (
  cohortName,
  cohortType,
  existingCohorts
) => {
  return existingCohorts
    .filter(cohort => cohort.cohortType === cohortType)
    .filter(
      cohort => cohort.cohortName.toLowerCase() === cohortName.toLowerCase()
    ).length;
};
