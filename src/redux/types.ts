import { Reducer } from 'redux';

export type customReducers = {
  [key: string]: Reducer,
}

export type arcaDataType = {
  type: string,
  arcaData: string,
}
