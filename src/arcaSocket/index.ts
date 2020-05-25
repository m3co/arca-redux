import Socket from 'socket.io-client';
import { v4 as uuid4 } from 'uuid';
import { Store } from 'redux';
import { handleResponse } from '../redux/actions';
import { Model, Row, State } from '../types/state';

export const createArcaSocket = (store: Store) => {
  const io = Socket();

  io.on('connect', () => {});
  io.on('jsonrpc', handleResponse(store));

  return {
    socket: io,
    subscribe: subscribe(io),
    select: select(io),
    delete: toDelete(io),
    update: update(io),
    insert: insert(io),
  };
};

const sendRequest = (io: SocketIOClient.Socket, Method: string, Params: any) => {
  io.emit('jsonrpc', {
    ID: uuid4(),
    Method,
    ...Params,
  });
};

const subscribe = (io: SocketIOClient.Socket) => (Target: keyof State['Source']) => {
  sendRequest(io, 'Subscribe', { Params: { Target } });
};

const select = (io: SocketIOClient.Socket) => (Source: keyof State['Source'], PK?: Model['PK']) => {
  const Params = PK ? { Params: { PK } } : {};
  sendRequest(io, 'Select', { Context: { Source }, ...Params });
};

const toDelete = (io: SocketIOClient.Socket) => (Source: keyof State['Source'], PK: Model['PK']) => {
  sendRequest(io, 'Delete', { Context: { Source }, Params: { PK } });
};

const update = (io: SocketIOClient.Socket) =>
  (Source: keyof State['Source'], Row: Row, PK: Model['PK']) => {
  sendRequest(io, 'Update', { Context: { Source }, Params: { Row, PK } });
};

const insert = (io: SocketIOClient.Socket) => (Source: keyof State['Source'], Row: Row) => {
  sendRequest(io, 'Insert', { Context: { Source }, Params: { Row } });
};
