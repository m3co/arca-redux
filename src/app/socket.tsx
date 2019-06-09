
import * as Socket from 'socket.io-client';
import { v4 as uuid4 } from 'uuid';
import { ArcaState, ArcaActions, ArcaResponses, AAURow, AAUPK } from './types';
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
          if (response.Context.Target === 'AAU') {
            store.dispatch({
              type: 'Notify',
              Context: {
                Target: response.Context.Target
              },
              Method: response.Method,
              Row: response.Row,
              PK: {
                Key: response.Row.Key
              }
            });
          }
          break;
        case 'Select':
          store.dispatch({
            type: response.Method,
            Context: {
              Source: response.Context.Source
            },
            Result: response.Result
          });
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

  public Update(Table: string, Row: AAURow, PK: AAUPK): void {
    this.io.emit('jsonrpc', {
      ID: uuid4(),
      Context: {
        Source: Table
      },
      Method: 'Update',
      Params: {
        Row, PK
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
