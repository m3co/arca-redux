
import * as Socket from 'socket.io-client';
import { v4 as uuid4 } from 'uuid';
import { ArcaState, ArcaActions, ArcaResponses, ArcaEntries,
  AAU, FACADParamsBIC, FACADSchedules } from './types';
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
            case 'FACAD-ParamsBIC':
              store.dispatch({
                type: 'Notify',
                Context: {
                  Target: response.Context.Target
                },
                Method: response.Method,
                Row: response.Row as FACADParamsBIC["Row"]
              });
              break;
            case 'FACAD-Schedules':
              store.dispatch({
                type: 'Notify',
                Context: {
                  Target: response.Context.Target
                },
                Method: response.Method,
                Row: response.Row as FACADSchedules["Row"]
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
                  Source: response.Context.Source
                },
                Result: response.Result as AAU["Row"][]
              });
              break;
            case 'FACAD-ParamsBIC':
              store.dispatch({
                type: 'Select',
                Context: {
                  Source: response.Context.Source
                },
                Result: response.Result as FACADParamsBIC["Row"][]
              });
              break;
            case 'FACAD-Schedules':
              store.dispatch({
                type: 'Select',
                Context: {
                  Source: response.Context.Source
                },
                Result: response.Result as FACADSchedules["Row"][]
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

  public Select(Source: string): void {
    this.io.emit('jsonrpc', {
      ID: uuid4(),
      Context: {
        Source
      },
      Method: 'Select'
    });
  }

  public Insert(Source: string, Row: ArcaEntries["Row"]): void {
    this.io.emit('jsonrpc', {
      ID: uuid4(),
      Context: {
        Source
      },
      Method: 'Insert',
      Params: {
        Row
      }
    });
  }

  public Delete(Source: string, PK: ArcaEntries["PK"]): void {
    this.io.emit('jsonrpc', {
      ID: uuid4(),
      Context: {
        Source
      },
      Method: 'Delete',
      Params: {
        PK
      }
    });
  }

  public Update(Source: string, Entry: ArcaEntries): void {
    this.io.emit('jsonrpc', {
      ID: uuid4(),
      Context: {
        Source
      },
      Method: 'Update',
      Params: {
        Row: Entry.Row,
        PK: Entry.PK
      }
    });
  }

  public Subscribe(Target: string): void {
    this.io.emit('jsonrpc', {
      ID: uuid4(),
      Method: 'Subscribe',
      Params: {
        Target
      },
    });
  }

  public GetInfo(Source: string): void {
    this.io.emit('jsonrpc', {
      ID: uuid4(),
      Method: 'GetInfo',
      Context: {
        Source
      },
    });
  }
}
