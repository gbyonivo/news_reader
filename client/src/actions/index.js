import superagent from 'superagent';
import { actionTypes } from '../constants';

export const loadArticles = () => {
    return dispatch => {
        superagent
        .get('http://localhost:8000/articlesWithImages')
        .end((error, response) => {
            dispatch(error ?
            {
                type: actionTypes.CONNECTION_ERROR,
                error: `cannot load articles, Status ${response.status}`
            } : {
                type: actionTypes.LOAD_ARTICLES,
                articles: JSON.parse(response.text)
            });
        });
    };
};
