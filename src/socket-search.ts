
import Socket from 'socket.io-client';
import { v4 as uuid4 } from 'uuid';

import { State, Fields } from './types';

export interface Params {[Key: string]: string | number | null}

interface Response {
  ID: string;
  Method: "Search";
  Context: {
    Field: keyof Fields;
    Source: keyof State["Source"];
  };
  Result: Params[];
  Error: {} | null;
};

export class ARCASearchSocket {
  private readonly io: SocketIOClient.Socket;
  private ids: {[ID: string]: {
    resolve: (value: Response) => void;
    reject: (reason: string) => void;
  };} = {};

  private handleResponse = (response: Response): void => {
    const handle = this.ids[response.ID];
    if (handle) {
      if (response.Error) {
        this.ids[response.ID].reject(response.Error.toString()); // TODO
      } else {
        this.ids[response.ID].resolve(response);
      }
      delete this.ids[response.ID];
    } else {
      console.error('response', response, 'not found');
    }
  }

  public constructor(io = Socket()) {
    this.io = io;
    this.io.on('jsonrpc', this.handleResponse);
  }

  public Search = (Source: keyof State["Source"],
    Field: keyof Fields, Params: Params, ID?: string): Promise<Response> => {
    return new Promise((
      resolve: (value: Response) => void,
      reject: (reason: string) => void): void => {
      const request = {
        ID: ID || uuid4(),
        Method: 'Search',
        Context: {
          Source,
          Field
        },
        Params,
      };
      this.io.emit('jsonrpc', request);
      this.ids[request.ID] = { resolve, reject };
    })
  }
}
