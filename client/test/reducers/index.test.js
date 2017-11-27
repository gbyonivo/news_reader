import reducers from '../../src/reducers';
import { createStore } from 'redux'
import articles from '../../src/reducers/articles';

describe('all reducers should be returned', () => {
  it('all reducers should be returned', () => {
    const store = createStore(reducers);
    const articlesState = store.getState().articles;
    expect(articlesState).toEqual(articles(undefined, {}))
  });
})