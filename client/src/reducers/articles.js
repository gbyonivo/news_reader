import { actionTypes } from '../constants';

/**
 * @const
 * @type {Object} initialState
 */
const initialState = {
    articles: []
};
/**
 * @const
 * @type {closure}
 * @param {object} - state of the app
 * @param {object} - action of shape { type, payload }
 */
const articles = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOAD_ARTICLES:
            return { ...state, ...{ articles: action.articles } };
        default:
            return state;
    }
};

export default articles;
