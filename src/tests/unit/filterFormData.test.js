import { filterFormData } from "../../helperFunctions/helpers.js"

const cohortIdNotInArray = "Adsefg900"
const cohortId = 'AKd12ds3'
const testData = [
    {
        id: 'AKd123',
        name: 'cohort 9',
        type: 'development'
    },
    {
      id: 'AKd12ds3',
      name: 'cohort 8',
      type: 'design'
    },
    {
        id: 'AKd123ss',
        name: 'cohort 10',
        type: 'development'
    }
];

describe("Filters for Correct Cohort Data", () => {
    it("returns an array with only one object with id equal to cohortId", () => {
        expect(filterFormData(testData, cohortId).length).toEqual(1)});
        expect(filterFormData(testData, cohortId)).toEqual( [{
            id: 'AKd12ds3',
            name: 'cohort 8',
            type: 'design'
        }])
        expect(filterFormData(testData, cohortId)).not.toEqual( [{
            id: 'AKd123ss',
            name: 'cohort 10',
            type: 'development'
        }] )
    it("returns an empty array when I pass in a cohort id that isn't in the data array", () => {
        expect(filterFormData(testData, cohortIdNotInArray)).toEqual([])
    })
});
