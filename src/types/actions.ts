import {
  State,
  PK,
  Row,
} from './state';

export type Action = {
  type: 'insert' | 'delete' | 'update' | 'Select';
  payload: {
    Context: {
      Source: keyof State['Source'];
    }
    ID: string;
    Source: keyof State['Source'];
    Row: Row;
    PK: PK;
    Result: Row[];
  }
};
