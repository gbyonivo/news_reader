import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import combinedReducers from './reducers/';
import Container from './container';

const store = applyMiddleware(thunk)(createStore)(combinedReducers);

const mainElement = document.getElementById('main-container');

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={Container}/>
        </Router>
    </Provider>, mainElement
);
