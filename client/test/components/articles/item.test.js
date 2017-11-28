import React from 'react';
import renderer from 'react-test-renderer';
import Item from '../../../src/components/articles/item';

describe('Item component', () => {
  it('renders correctly', () => {
    const item = {
      title: 'a',
      link: 'b',
      images: []
    }
    const actual = renderer.create(
      <Item item={item}/>
    );
    expect(actual).toMatchSnapshot();
  });
  it('renders correctly with images', () => {
    const item = {
      title: 'a',
      link: 'b',
      images: ['a', 'b']
    }
    const actual = renderer.create(
      <Item item={item}/>
    );
    expect(actual).toMatchSnapshot();
  });
})