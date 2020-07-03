import { Store } from 'redux';
import { Response, ResponseHandler } from '../types/response';
import { REQUEST_METHODS } from './constant';

const handleResponseAction = (response: Response) => ({
  type: REQUEST_METHODS[response.Method],
  payload: response,
});

export const handleResponse = (store: Store): ResponseHandler => (response: Response) => {
  store.dispatch(handleResponseAction(response));
};
