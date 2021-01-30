import React from "react";
import renderer from "react-test-renderer";
import Questions from "../../components/Questions/Questions";
import { Provider } from "react-redux";
import { store } from "../../redux/store";

describe("Questions", () => {
  test("Should render without questions properly", () => {
    const questions = [];

    const tree = renderer
      .create(
        <Provider store={store}>
          <Questions questionsData={questions} />
        </Provider>
      )
      .toJSON();
    
    expect(tree).toMatchSnapshot();
  })

  test("Should render questions properly", () => {
    const questions = [
      {
        timestampForKey: '1575845632',
        prompt: 'question 1',
        options: ['a', 'b'],
        type: 'check-box',
        required: true
      },
      {
        timestampForKey: '1575845632',
        prompt: 'question 2',
        options: ['a', 'b', 'c', 'd'],
        type: 'drop-down',
        required: false,
      },
      {
        timestampForKey: '1575845632',
        prompt: 'question 3',
        type: 'paragraph',
        required: true,
      },
      {
        timestampForKey: '1575845632',
        prompt: 'question 4',
        type: 'short-answer',
        required: true,
      }
    ];
    
    const tree = renderer
      .create(
        <Provider store={store}>
          <Questions questionsData={questions} />
        </Provider>
      )
      .toJSON();
    
    expect(tree).toMatchSnapshot();
  })
})