import {createStore, compose, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';

import {reducer as listReducer} from './components/list/';

const middlewares = [thunk];

const reducer =  combineReducers({
  list: listReducer
});
;
const win = window;
const storeEnhancers = compose(
	applyMiddleware(...middlewares),
	(win && win.devToolsExtension) ? win.devToolsExtension() : (f) => f,
);

const initState = {};
export default createStore(reducer, initState, storeEnhancers);