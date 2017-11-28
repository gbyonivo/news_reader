import React from 'react';
import renderer from 'react-test-renderer';
import Filter from '../../../src/components/articles/filter';

describe('Filter component', () => {
  it('renders correctly', () => {
    const actual = renderer.create(
      <Filter defaultValue={'ter'} onChange={() => {}}/>
    );
    expect(actual).toMatchSnapshot();
  })
})