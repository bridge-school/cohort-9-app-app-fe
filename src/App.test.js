import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './redux/store';


describe('App', () => {
  test('Should render properly', () => {
    const renderer = new ShallowRenderer();
    const element = renderer.render(
      <Provider store={store}>
        <App />
      </Provider>);
    expect(element).toMatchSnapshot();
  });
});