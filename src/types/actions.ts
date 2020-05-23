
import {
  State,
  PK,
  Row,
} from './state';

interface ActionSubscribe {
  type: 'Subscribe';
  Source: keyof State['Source'];
  Subscribed: boolean;
}

interface ActionSelect {
  type: 'Select';
  Source: keyof State['Source'];
  Result: Row[];
}

interface ActionRequest {
  type: 'Insert' | 'Delete' | 'Update';
  ID: string;
  Source: keyof State['Source'];
  Success?: boolean;
}

interface ActionNotificate {
  type: 'insert' | 'delete' | 'update';
  ID: string;
  Source: keyof State['Source'];
  Row: Row;
  PK?: PK;
}

export type Action = ActionSubscribe | ActionRequest | ActionSelect | ActionNotificate;
