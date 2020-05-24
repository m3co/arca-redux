
import {
  State,
  PK,
  Row,
} from './state';

interface ActionSelect {
  type: 'Select';
  payload: {
    Source: keyof State['Source'];
    Result: Row[];
  }
}

interface ActionNotificate {
  type: 'insert' | 'delete' | 'update';
  payload: {
    ID: string;
    Source: keyof State['Source'];
    Row: Row;
    PK: PK;
  }
}

export type Action = ActionSelect | ActionNotificate;
