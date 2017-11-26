import { combineReducers } from 'redux';
import articles from './articles';

const combinedReducers = combineReducers({
    articles
});

export default combinedReducers;
