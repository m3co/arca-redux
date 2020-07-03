import { State, Model, Row } from './state';

export interface Socket {
  _: SocketIOClient.Socket;
  select: (Source: keyof State['Source'], PK?: Model['PK']) => void;
  delete: (Source: keyof State['Source'], PK: Model['PK']) => void;
  update: (Source: keyof State['Source'], Row: Row, PK: Model['PK']) => void;
  insert: (Source: keyof State['Source'], Row: Row) => void;
  custom: (params: any) => void;
}

export type SearchParams = {
  Search: string | number,
  PK?: Row,
  Limit?: number,
  Tag?: string,
}