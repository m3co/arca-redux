import {
  State,
  PK,
  Row,
  SearchResultItem,
} from './state';

export type Action = {
  type: 'insert' | 'delete' | 'update' | 'Select' | 'Search';
  payload: {
    Context: {
      Source: keyof State['Source'];
      Target: keyof State['Source'];
    }
    ID: string;
    Source: keyof State['Source'];
    Row: Row;
    PK: PK;
    Result: Row[] | SearchResultItem[];
  }
};