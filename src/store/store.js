

import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../redux'; //Its the index.js file of the Redux folder

import thunkMiddleware from 'redux-thunk'; //middleware

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));
export default store;
