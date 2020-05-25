import { State, Model, Row } from './state';

export interface Socket {
  socket: SocketIOClient.Socket;
  subscribe: (Target: keyof State['Source']) => void;
  select: (Source: keyof State['Source'], PK?: Model['PK']) => void;
  delete: (Source: keyof State['Source'], PK: Model['PK']) => void;
  update: (Source: keyof State['Source'], Row: Row, PK: Model['PK']) => void;
  insert: (Source: keyof State['Source'], Row: Row) => void;
}
