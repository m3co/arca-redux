
import { Store } from 'redux';
import { Response } from './types';

export function handleResponse(store: Store): (response: Response) => void {
  return (response: Response): void => {
    switch (response.Method) {
      case 'GetInfo':
      case 'Select':
        store.dispatch({
          type: response.Method,
          Source: response.Context.Source,
          Result: response.Result
        });
        return;
      case 'Subscribe':
        store.dispatch({
          type: response.Method,
          Source: response.Context.Target,
          Subscribed: response.Result === 'Success'
        });
        return;
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
        console.log('cannot process the response:', JSON.stringify(response));
        return;
    }
  };
}
