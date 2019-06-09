
import { Action } from 'redux';

export interface ArcaInfo {
  Actions: {
    Insert: boolean;
    Update: boolean;
    Delete: boolean;
  };
  Fields: {
    Editable: boolean;
    Name: string;
    Primary: boolean;
    Required: boolean;
    Type: string;
  }[];
}

export interface ActionSelect<T> extends Action {
  type: 'Select';
  Context: {
    Source: string;
  };
  Result: T[];
}

export interface ActionNotify<Row, PK> extends Action {
  type: 'Notify';
  Context: {
    Target: string;
  };
  Method: 'delete' | 'update' | 'insert';
  Row: Row;
  PK: PK;
}

export interface ActionGetInfo extends Action {
  type: 'GetInfo';
  Context: {
    Source: string;
  };
  Result: ArcaInfo;
}

export interface ActionStatus extends Action {
  type: 'Connect' | 'Disconnect';
}

export interface ResponseSubscribeUnsubscribe {
  Context: {
    Target: string;
  } | {
    Source: string;
  };
  ID: string;
  Method: 'Subscribe' | 'Unsubscribe';
  Result: 'Success';
}

export interface ResponseGetInfo {
  Context: {
    Source: string;
  };
  ID: string;
  Method: 'GetInfo';
  Result: ArcaInfo;
}

export interface ResponseDUI {
  Context: {
    Source: string;
  };
  ID: string;
  Method: 'Delete' | 'Update' | 'Insert';
  Result: {
    Success: boolean;
  };
}

export interface ResponseSelect<T> {
  Context: {
    Source: string;
  };
  ID: string;
  Method: 'Select';
  Result: T[];
}

export interface Notification<Target, Row> {
  Context: {
    Db: string;
    Notification: true;
    Source: string;
    Target: Target;
  };
  Method: 'delete' | 'update' | 'insert';
  Row: Row;
}

export type ArcaActions = ActionStatus | ActionGetInfo | ActionSelect<AAURow> | ActionNotify<AAURow, AAUPK>;
export type ArcaResponses = ResponseSubscribeUnsubscribe | ResponseGetInfo | ResponseDUI | ResponseSelect<AAURow> | Notification<'AAU', AAURow>

export interface ArcaState {
  Sources: {
    AAU: {
      Rows: AAURow[];
      Info: ArcaInfo | null;
    };
  };
  active: boolean;
}

export interface AAURow {
  Key: string;
  Parent: string;
  Expand: boolean;
  Description: string;
  Unit: string;
  Price: number;
  P: number;
}

export interface AAUPK {
  Key: string;
}
