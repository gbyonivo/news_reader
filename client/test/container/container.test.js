import Container from '../../src/container';
import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import combinedReducers from '../../src/reducers';
import thunk from 'redux-thunk';

describe('container', () => {
  it('should render correctly' , () => {
    const store = applyMiddleware(thunk)(createStore)(combinedReducers);
    const actual = renderer.create(
      <Provider store={store}>
        <Container />
      </Provider>
    ).toJSON();
    expect(actual).toMatchSnapshot();
  })

  it('should render correctly' , () => {
    const store = applyMiddleware(thunk)(createStore)(combinedReducers);

    const wrapper = mount(
      <Provider store={store}>
        <Container />
      </Provider>
    );
    spyOn(store, 'dispatch').and.callThrough();
    store.dispatch({ type: 'LOAD_ARTICLES', payload: { articles: [] } });
    wrapper.update();
  
    const actual = store.dispatch.calls.first().args;
    const expected = [{
      payload: { articles: [] }, 
      type: 'LOAD_ARTICLES' }
    ];
  
    expect(actual).toEqual(expected);
  })
});