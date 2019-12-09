import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import CohortNameInput from "../../components/CohortNameInput";

describe("CohortNameInput", () => {
  test("Should render properly", () => {
    const renderer = new ShallowRenderer();
    const element = renderer.render(
      <CohortNameInput />
    );
    expect(element).toMatchSnapshot();
  });
});
