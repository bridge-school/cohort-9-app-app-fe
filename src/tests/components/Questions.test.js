import React from "react";
import renderer from "react-test-renderer";
import Questions from "../../components/Questions/Questions";

describe("Questions", () => {
  test("Should render properly", () => {
    const questions = [];

    const tree = renderer
      .create(<Questions questionsData={questions} />)
      .toJSON();
    
    expect(tree).toMatchSnapshot();
  })
})