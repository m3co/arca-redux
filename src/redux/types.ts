import { Reducer } from 'redux';

export type customReducers = {
  [key: string]: Reducer<any, any>,
}

export type arcaDataType = {
  type: string,
  arcaData: string,
}
