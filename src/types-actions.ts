
import {
  State,
  PK,
  Row,
  Info,
} from './types';

interface ActionConnect {
  type: 'Connect';
};

interface ActionSubscribe {
  type: 'Subscribe';
  Source: keyof State["Source"];
  Subscribed: boolean;
}

interface ActionGetInfo {
  type: 'GetInfo';
  Source: keyof State["Source"];
  Result: Info;
};

interface ActionSelect {
  type: 'Select';
  Source: keyof State["Source"];
  Result: Row[];
};

interface ActionRequest {
  type: 'Insert' | 'Delete' | 'Update';
  ID: string;
  Source: keyof State["Source"];
  Success?: boolean;
};

interface ActionNotificate {
  type: 'insert' | 'delete' | 'update';
  ID: string;
  Source: keyof State["Source"];
  Row: Row;
  PK?: PK;
}

export type Action = ActionConnect | ActionGetInfo | ActionSubscribe | ActionRequest | ActionSelect | ActionNotificate;
