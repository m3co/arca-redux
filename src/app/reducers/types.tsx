
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

export interface ActionSelect<Row> extends Action {
  type: 'Select';
  Context: {
    Source: string;
  };
  Result: Row[];
}

export interface ActionNotify<Target, Row> extends Action {
  type: 'Notify';
  Context: {
    Target: Target;
  };
  Method: 'delete' | 'update' | 'insert';
  Row: Row;
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

export interface ResponseSelect<Row> {
  Context: {
    Source: string;
  };
  ID: string;
  Method: 'Select';
  Result: Row[];
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

export type ArcaActions = ActionStatus | ActionGetInfo |
ActionSelect<AAU["Row"]> | ActionNotify<'AAU', AAU["Row"]>;
export type ArcaResponses = ResponseSubscribeUnsubscribe | ResponseGetInfo | ResponseDUI |
ResponseSelect<AAU["Row"]> | Notification<'AAU', AAU["Row"]>

export interface ArcaState {
  Sources: {
    AAU: {
      Rows: AAU["Row"][];
      Info: ArcaInfo | null;
    };
  };
  active: boolean;
}

export interface AAU {
  Row: {
    Key: string;
    Parent: string;
    Expand: boolean;
    Description: string;
    Unit: string;
    Price: number;
    P: number;
  };
  PK: {
    Key: string;
  };
}

export type ArcaEntries = AAU;
