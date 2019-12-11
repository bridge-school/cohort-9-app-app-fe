import React from "react";
import renderer from "react-test-renderer";
import Header from "../../components/Header/Header";

describe("Header", () => {
  test("Should render properly as an admin", () => {
    const tree = renderer
      .create(<Header isAdmin />)
      .toJSON();
    
    expect(tree).toMatchSnapshot();
  });

  test("Should render properly", () => {
    const tree = renderer
      .create(<Header />)
      .toJSON();
    
    expect(tree).toMatchSnapshot();
  });
});
