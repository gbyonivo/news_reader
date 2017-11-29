/**
 * this is Actions
 */
import superagent from 'superagent';
import { actionTypes } from '../constants';
/**
 * this is an action that loads articles into the application
 * @returns {function}
 */
export const loadArticles = () => {
    /**
     * this is a function returned by load articles
     * @param {function} dispatch
     */
    return dispatch => {
        superagent
        .get('http://localhost:8000/articlesWithImages')
        .end((error, response) => {
            dispatch(error ?
            {
                type: actionTypes.CONNECTION_ERROR,
                error: 'Error loading articles'
            } : {
                type: actionTypes.LOAD_ARTICLES,
                articles: JSON.parse(response.text)
            });
        });
    };
};
