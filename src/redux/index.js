//This is the rootReducer File
//This is use to bind all the reducer alltogther
//Although we have only one reducer right now

import { combineReducers } from 'redux';

import apiFetch from './apiFetch/reducer';


export default combineReducers({
    apiFetch
});
