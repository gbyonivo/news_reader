import Articles from '../../../src/components/articles';
import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import combinedReducers from '../../../src/reducers';
import thunk from 'redux-thunk';

describe('articles renders correction', () => {
  it('should render correctly' , () => {
    const store = applyMiddleware(thunk)(createStore)(combinedReducers);
    const actual = renderer.create(
      <Provider store={store}>
        <Articles/>
      </Provider>
    ).toJSON();
    expect(actual).toMatchSnapshot();
  });
});