import {createStore, applyMiddleware, combineReducers} from 'redux';
import promiseMiddleware from 'redux-promise-middleware';

import listReducer from './ducks/listReducer.js';
import workspaceReducer from './ducks/workspaceReducer.js';

export default createStore(combineReducers({ listReducer, workspaceReducer }), undefined, applyMiddleware( promiseMiddleware() ));
