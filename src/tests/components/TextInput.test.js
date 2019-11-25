import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import TextInput from "../../components/TextInput";

describe("TextInput", () => {
  test("Should render properly", () => {
    const renderer = new ShallowRenderer();
    const element = renderer.render(
      <TextInput />
    );
    expect(element).toMatchSnapshot();
  });
});
