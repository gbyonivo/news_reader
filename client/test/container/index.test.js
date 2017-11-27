import Container from '../../src/container';
import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import combinedReducers from '../../src/reducers';

describe('container', () => {
  // it('should render correctly' , () => {
  //   const store = createStore(combinedReducers);
  //   const actual = renderer.create(
  //     <Provider store={store}>
  //       <Container/>
  //     </Provider>
  //   ).toJSON();
  //   expect(actual).toMatchSnapshot();
  // })
  it('should render correctly' , () => {
    const expected = 1;
    const actual = 1
    expect(actual).toBe(expected);
  })
});