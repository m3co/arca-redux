import { arcaDataReducer } from './reducers';
import { createStore, combineReducers, applyMiddleware, Middleware, ReducersMapObject } from 'redux';

const arcaDataReducers = {
  arcaDataReducer,
};

export const createArcaData = (reducers: ReducersMapObject, enhancers: Middleware[]) => 
 createStore(combineReducers({ ...arcaDataReducers, ...reducers }), enhancers ? applyMiddleware(...enhancers) : undefined);
