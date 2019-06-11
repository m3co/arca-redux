
import * as Socket from 'socket.io-client';
import { v4 as uuid4 } from 'uuid';
import { ArcaState, ArcaActions, ArcaResponses, ArcaEntries, AAU, FACADParamsBIC } from './reducers/types';
import { Store } from 'redux'

export class ArcaSocket {
  private io: SocketIOClient.Socket;

  public constructor(store: Store<ArcaState, ArcaActions>) {
    const io = this.io = Socket();

    io.on('connect', (): void => {
      store.dispatch({
        type: 'Connect'
      });
    });

    io.on('jsonrpc', (response: ArcaResponses): void => {
      switch (response.Method) {
        case 'Subscribe':
          break;
        case 'Unsubscribe':
          break;
        case 'Update':
          console.log(response, 'by update'); // Still don't know how to notify about this response... need to talk with @NovikovAntonY
          break;
        case 'insert':
        case 'delete':
        case 'update':
          switch (response.Context.Target) {
            case 'AAU':
              store.dispatch({
                type: 'Notify',
                Context: {
                  Target: response.Context.Target
                },
                Method: response.Method,
                Row: response.Row as AAU["Row"]
              });
              break;
            case 'FACADParamsBIC':
              store.dispatch({
                type: 'Notify',
                Context: {
                  Target: response.Context.Target
                },
                Method: response.Method,
                Row: response.Row as FACADParamsBIC["Row"]
              });
              break;
            default:
              break;
          }
          break;
        case 'Select':
          switch (response.Context.Source) {
            case 'AAU':
              store.dispatch({
                type: 'Select',
                Context: {
                  Source: 'AAU'
                },
                Result: response.Result as AAU["Row"][]
              });
              break;
            case 'FACADParamsBIC':
              store.dispatch({
                type: 'Select',
                Context: {
                  Source: 'FACADParamsBIC'
                },
                Result: response.Result as FACADParamsBIC["Row"][]
              });
              break;
            default:
              break;
          }
          break;
        case 'GetInfo':
          store.dispatch({
            type: response.Method,
            Context: {
              Source: response.Context.Source
            },
            Result: response.Result
          });
          break;
        default:
          console.log(response);
          break;
      }
    });
  }

  public Select(Table: string): void {
    this.io.emit('jsonrpc', {
      ID: uuid4(),
      Context: {
        Source: Table
      },
      Method: 'Select'
    });
  }

  public Update(Table: string, Entry: ArcaEntries): void {
    this.io.emit('jsonrpc', {
      ID: uuid4(),
      Context: {
        Source: Table
      },
      Method: 'Update',
      Params: {
        Row: Entry.Row,
        PK: Entry.PK
      }
    });
  }

  public Subscribe(Table: string): void {
    this.io.emit('jsonrpc', {
      ID: uuid4(),
      Method: 'Subscribe',
      Params: {
        Target: Table,
      },
    });
  }

  public GetInfo(Table: string): void {
    this.io.emit('jsonrpc', {
      ID: uuid4(),
      Method: 'GetInfo',
      Context: {
        Source: Table,
      },
    });
  }
}
