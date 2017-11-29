import { combineReducers } from 'redux';
import articles from './articles';
/**
 * @const
 * @type {object}
 */
const combinedReducers = combineReducers({
    articles
});

export default combinedReducers;
