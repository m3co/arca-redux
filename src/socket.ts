
import Socket from 'socket.io-client';
import { v4 as uuid4 } from 'uuid';
import { Store } from 'redux';

import { Field, Model, Row, State } from './types';
import { handleResponse } from './socket-handleResponse';

export class ARCASocket {
  public readonly store: Store<State>;
  private readonly io: SocketIOClient.Socket;

  public constructor(store: Store, io = Socket()) {
    this.store = store;
    this.io = io;
    this.io.on('connect', (): void => {
      this.store.dispatch({
        type: 'Connect'
      });
    });

    this.io.on('jsonrpc', handleResponse(store));
  }

  public GetInfo = (Source: keyof State["Source"]): void => {
    this.io.emit('jsonrpc', {
      ID: uuid4(),
      Method: 'GetInfo',
      Context: {
        Source
      },
    });
  }

  public Select = (Source: keyof State["Source"]): void => {
    this.io.emit('jsonrpc', {
      ID: uuid4(),
      Method: 'Select',
      Context: {
        Source
      },
    });
  }

  public Subscribe = (Target: keyof State["Source"]): void => {
    this.io.emit('jsonrpc', {
      ID: uuid4(),
      Method: 'Subscribe',
      Params: {
        Target
      },
    });
  }

  public Delete = (Source: keyof State["Source"], row: Row, ID?: string): void => {
    const state = this.store.getState();
    const { Info } = state.Source[Source];
    if (Info) {
      const columnsPK = Info.Fields
        .filter((field: Field): boolean => field.Primary)
        .map((field: Field): keyof Model["PK"] => field.Name as keyof Model["PK"]);
      const PK = columnsPK.reduce((acc: Model["PK"], column) => {
        acc[column] = row[column];
        return acc;
      }, {} as Model["PK"]);
      const request = {
        ID: ID || uuid4(),
        Context: {
          Source
        },
        Method: 'Delete',
        Params: {
          PK
        }
      };
      this.store.dispatch({
        Source,
        type: 'Delete',
        ID: request.ID,
      });
      this.io.emit('jsonrpc', request);
    }
  }

  public Update = (Source: keyof State["Source"], row: Row, ID?: string): void => {
    const state = this.store.getState();
    const { Info } = state.Source[Source];
    if (Info) {
      const columnsPK = Info.Fields
        .filter((field: Field): boolean => field.Primary)
        .map((field: Field): keyof Model["PK"] => field.Name as keyof Model["PK"]);
      const PK = columnsPK.reduce((acc: Model["PK"], column) => {
        acc[column] = row[column];
        return acc;
      }, {} as Model["PK"]);
      const request = {
        ID: ID || uuid4(),
        Context: {
          Source
        },
        Method: 'Update',
        Params: {
          Row: row,
          PK: PK,
        }
      };
      this.store.dispatch({
        Source,
        type: 'Update',
        ID: request.ID,
      });
      this.io.emit('jsonrpc', request);
    }
  }

  public Insert = (Source: keyof State["Source"], row: Row, ID?: string): string => {
    const request = {
      ID: ID || uuid4(),
      Context: {
        Source
      },
      Method: 'Insert',
      Params: {
        Row: row
      }
    }
    this.io.emit('jsonrpc', request);
    this.store.dispatch({
      Source,
      type: 'Insert',
      ID: request.ID,
    });
    return request.ID;
  }
}
