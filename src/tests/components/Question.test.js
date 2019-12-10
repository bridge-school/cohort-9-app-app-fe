import React from "react";
import renderer from "react-test-renderer";
import Question from "../../components/Questions/Question";

describe("Question", () => {
  test("Should render checkboxes properly", () => {
    const question = {
      timestampForKey: '1575845632',
      prompt: 'question 1',
      options: ['a', 'b'],
      type: 'check-box',
      isRequired: true,
    }
    const index = 0;
    const tree = renderer
      .create(<Question question={question} index={index} />)
      .toJSON();
    
    expect(tree).toMatchSnapshot();
  });

  test("Should render dropdown properly", () => {
    const question = {
      timestampForKey: '1575845632',
      prompt: 'question 2',
      options: ['a', 'b', 'c', 'd'],
      type: 'drop-down',
      isRequired: false
    }
    const index = 1;
    const tree = renderer
      .create(<Question question={question} index={index} />)
      .toJSON();
  
    expect(tree).toMatchSnapshot();
  });
  test("Should render paragraph properly", () => {
    const question = {
      timestampForKey: '1575845632',
      prompt: 'question 3',
      type: 'paragraph',
      isRequired: false,
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
      prompt: 'question 4',
      type: 'short-answer',
      isRequired: true,
    }
    const index = 3;
    const tree = renderer
      .create(<Question question={question} index={index} />)
      .toJSON();
    
    expect(tree).toMatchSnapshot();
  });
});