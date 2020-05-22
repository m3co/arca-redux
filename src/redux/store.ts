import { customReducers } from '../types';
import { createStore, combineReducers, applyMiddleware, Middleware } from 'redux';

const arcaDataReducers = {
};

export const createArcaRedux = (reducers: customReducers = {}, enhancers?: Middleware[]) => 
 createStore(combineReducers({ ...arcaDataReducers, ...reducers }), enhancers ? applyMiddleware(...enhancers) : undefined);
