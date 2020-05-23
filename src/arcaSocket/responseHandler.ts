
import { Store } from 'redux';
import { Response, ResponseHandler } from '../types/response';

export const handleResponse = (store: Store): ResponseHandler => (response: Response) => {
  switch (response.Method) {
    case 'Select':
      store.dispatch({
        type: response.Method,
        Source: response.Context.Source,
        Result: response.Result
      });
      break;
    case 'Subscribe':
      store.dispatch({
        type: response.Method,
        Source: response.Context.Target,
        Subscribed: response.Result === 'Success'
      });
      break;
    case 'Insert':
    case 'Delete':
    case 'Update':
      store.dispatch({
        type: response.Method,
        Source: response.Context.Source,
        ID: response.ID,
        Success: response.Result.Success,
      });
      break;
    case 'insert':
    case 'delete':
    case 'update':
      store.dispatch({
        type: response.Method,
        Source: response.Context.Target,
        Row: response.Row,
        PK: response.PK
      });
      break;
    default:
      console.log('Cannot process the response:', JSON.stringify(response));
  }
};
