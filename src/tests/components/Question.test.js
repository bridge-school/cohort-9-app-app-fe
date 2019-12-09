import React from "react";
import renderer from "react-test-renderer";
import Question from "../../components/Questions/Question";

describe("Question", () => {
  test("Should render checkboxes properly", () => {
    const question = {
      timestampForKey: '1575845632',
      options: ['a', 'b'],
      type: 'checkboxes',
      required: true,
    }
    const index = 1;
    const tree = renderer
      .create(<Question question={question} index={index} />)
      .toJSON();
    
    expect(tree).toMatchSnapshot();
  });

  test("Should render dropdown properly", () => {
    const question = {
      timestampForKey: '1575845632',
      options: ['a', 'b', 'c', 'd'],
      type: 'dropdown',
      required: false,
    }
    const index = 2;
    const tree = renderer
      .create(<Question question={question} index={index} />)
      .toJSON();
    
    expect(tree).toMatchSnapshot();
  });
  test("Should render paragraph properly", () => {
    const question = {
      timestampForKey: '1575845632',
      type: 'paragraph',
      required: false,
    }
    const index = 2;
    const tree = renderer
      .create(<Question question={question} index={index} />)
      .toJSON();
    
    expect(tree).toMatchSnapshot();
  });
  test("Should render short answers properly", () => {
    const question = {
      timestampForKey: '1575845632',
      type: 'short answers',
      required: true,
    }
    const index = 2;
    const tree = renderer
      .create(<Question question={question} index={index} />)
      .toJSON();
    
    expect(tree).toMatchSnapshot();
  });
});
