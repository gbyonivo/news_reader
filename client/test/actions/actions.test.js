import * as actions from '../../src/actions';
// todo: complete tests.
describe('loadArticles', () => {
  it('should return load articles action', () => {
    const actual = actions.loadArticles();
    expect(typeof actual).toBe('function')
    // const dispatch = (x) => { return x; }
    // const dispatchActual = actual(dispatch);
    // expect(dispatchActual).toEqual({})
  });
});