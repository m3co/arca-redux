import { customReducers } from './types';
import { arcaDataReducer } from './reducers';
import { createStore, combineReducers, applyMiddleware, Middleware } from 'redux';

const arcaDataReducers = {
  arcaDataReducer,
};

export const createArcaData = (reducers: customReducers = {}, enhancers?: Middleware[]) => 
 createStore(combineReducers({ ...arcaDataReducers, ...reducers }), enhancers ? applyMiddleware(...enhancers) : undefined);
