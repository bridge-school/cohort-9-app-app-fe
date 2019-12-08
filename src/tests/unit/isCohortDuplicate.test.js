import { isCohortDuplicate } from "../../pages/AdminForm";

describe("Duplicate cohort submittion check", () => {
  it("returns an array with lenght 1 for duplicate cohort", () => {
    const isCohortDuplicate = () => {
      const props = {
        cohortName: "cohort 10",
        cohortType: "backend",
        existingCohorts: [{ cohortName: "cohort 10", cohortType: "backend" }]
      };

      const { cohortName, cohortType, existingCohorts } = props;
      return existingCohorts
        .filter(cohort => cohort.cohortType === cohortType)
        .filter(
          cohort => cohort.cohortName.toLowerCase() === cohortName.toLowerCase()
        ).length;
    };

    expect(isCohortDuplicate()).toEqual(1);
  });
  it("returns an array with lenght 0 for non duplicate cohort", () => {
    const isCohortDuplicate = () => {
      const props = {
        cohortName: "cohort 09",
        cohortType: "backend",
        existingCohorts: [{ cohortName: "cohort 10", cohortType: "backend" }]
      };

      const { cohortName, cohortType, existingCohorts } = props;
      return existingCohorts
        .filter(cohort => cohort.cohortType === cohortType)
        .filter(
          cohort => cohort.cohortName.toLowerCase() === cohortName.toLowerCase()
        ).length;
    };

    expect(isCohortDuplicate()).toEqual(0);
  });
  it("returns an array with lenght 0 for same cohort name but not same cohort type", () => {
    const isCohortDuplicate = () => {
      const props = {
        cohortName: "cohort 10",
        cohortType: "frontend",
        existingCohorts: [{ cohortName: "cohort 10", cohortType: "backend" }]
      };

      const { cohortName, cohortType, existingCohorts } = props;
      return existingCohorts
        .filter(cohort => cohort.cohortType === cohortType)
        .filter(
          cohort => cohort.cohortName.toLowerCase() === cohortName.toLowerCase()
        ).length;
    };

    expect(isCohortDuplicate()).toEqual(0);
  });
  it("returns an array with lenght 0 for same cohort type but not same cohort name", () => {
    const isCohortDuplicate = () => {
      const props = {
        cohortName: "cohort 08",
        cohortType: "backend",
        existingCohorts: [{ cohortName: "cohort 10", cohortType: "backend" }]
      };

      const { cohortName, cohortType, existingCohorts } = props;
      return existingCohorts
        .filter(cohort => cohort.cohortType === cohortType)
        .filter(
          cohort => cohort.cohortName.toLowerCase() === cohortName.toLowerCase()
        ).length;
    };

    expect(isCohortDuplicate()).toEqual(0);
  });
});
