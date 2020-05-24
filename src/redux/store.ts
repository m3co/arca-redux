import { createStore, combineReducers, applyMiddleware, Middleware } from 'redux';
import { arcaReducer } from './reducers';
import { customReducers } from '../types';

const arcaDataReducers = {
  arcaReducer,
};

export const createArcaRedux = (reducers: customReducers = {}, enhancers?: Middleware[]) => 
 createStore(combineReducers({ ...arcaDataReducers, ...reducers }), enhancers ? applyMiddleware(...enhancers) : undefined);
