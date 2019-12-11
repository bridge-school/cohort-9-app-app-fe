import { filterDuplicateCohorts } from "../../helperFunctions/helpers";

describe("Duplicate cohort submittion check", () => {
  it("returns an array with lenght 1 for duplicate cohort", () => {
    const cohortName = "cohort 10";
    const cohortType = "backend";
    const existingCohorts = [
      { cohortName: "cohort 10", cohortType: "backend" }
    ];

    expect(
      filterDuplicateCohorts(cohortName, cohortType, existingCohorts)
    ).toEqual(1);
  });

  it("returns an array with lenght 1 for duplicate upper case cohortName ", () => {
    const cohortName = "COHORT 10";
    const cohortType = "backend";
    const existingCohorts = [
      { cohortName: "cohort 10", cohortType: "backend" }
    ];
    expect(
      filterDuplicateCohorts(cohortName, cohortType, existingCohorts)
    ).toEqual(1);
  });

  it("returns an array with lenght 0 for non duplicate cohort", () => {
    const cohortName = "cohort 09";
    const cohortType = "backend";
    const existingCohorts = [
      { cohortName: "cohort 10", cohortType: "backend" }
    ];

    expect(
      filterDuplicateCohorts(cohortName, cohortType, existingCohorts)
    ).toEqual(0);
  });

  it("returns an array with lenght 0 for same cohort name but not same cohort type", () => {
    const cohortName = "cohort 10";
    const cohortType = "frontend";
    const existingCohorts = [
      { cohortName: "cohort 10", cohortType: "backend" }
    ];

    expect(
      filterDuplicateCohorts(cohortName, cohortType, existingCohorts)
    ).toEqual(0);
  });

  it("returns an array with lenght 0 for same cohort type but not same cohort name", () => {
    const cohortName = "cohort 08";
    const cohortType = "backend";
    const existingCohorts = [
      { cohortName: "cohort 10", cohortType: "backend" }
    ];
    expect(
      filterDuplicateCohorts(cohortName, cohortType, existingCohorts)
    ).toEqual(0);
  });
});
