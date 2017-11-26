import { actionTypes } from '../constants';

const initialState = {
    articles: []
};

const articles = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOAD_ARTICLES:
            return { ...state, ...{ articles: action.articles } };
        default:
            return state;
    }
};

export default articles;
