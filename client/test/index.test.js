import ReactDOM from 'react-dom';
import '../src';

jest.mock('react-dom', () => {
  return jest.genMockFromModule('react-dom');
});

describe('node', () => {
  it('matches snapshot', () => {
    const actual = ReactDOM.render.calls;
    expect(actual).toMatchSnapshot();
  });
});