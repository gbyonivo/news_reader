import articles from '../../src/reducers/articles';
import { actionTypes } from '../../src/constants/';

describe ('Initial state', () => {
    it('should return initial state', () => {
        const expected = {
            articles: []
        };
        const actual = articles(undefined, {});
        expect(actual).toEqual(expected);
    });
    it('should update initial state', () => {
        const expected = {
            articles: [1]
        };
        const action = {
            type: actionTypes.LOAD_ARTICLES,
            articles: [1]
        }
        const actual = articles(undefined, action);
        expect(actual).toEqual(expected);
    });
    it('should ignore updating the state', () => {
        const expected = {
            articles: []
        };
        const action = {
            type: undefined,
            articles: [1]
        }
        const actual = articles(undefined, action);
        expect(actual).toEqual(expected);
    });
});