import { createStore, combineReducers, applyMiddleware, Middleware, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { arcaReducer } from './reducers';
import { customReducers } from '../types';

const arcaDataReducers = {
  arca: arcaReducer,
};

export const createArcaRedux = (reducers: customReducers = {}, enhancers: Middleware[] = []): Store => 
  createStore(
    combineReducers({ ...arcaDataReducers, ...reducers }),
    composeWithDevTools(applyMiddleware(...enhancers))
  );
