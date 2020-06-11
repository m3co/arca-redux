import { State, Model, Row, PK } from './state';

export interface Socket {
  _: SocketIOClient.Socket;
  subscribe: (Target: keyof State['Source']) => void;
  select: (Source: keyof State['Source'], PK?: Model['PK']) => void;
  delete: (Source: keyof State['Source'], PK: Model['PK']) => void;
  update: (Source: keyof State['Source'], Row: Row, PK: Model['PK']) => void;
  insert: (Source: keyof State['Source'], Row: Row) => void;
}

export type SearchParams = {
  Search: string | number,
  PK?: PK,
  Limit?: number,
  Tag?: string,
}