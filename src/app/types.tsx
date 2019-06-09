
import { Action } from 'redux';

export interface ActionSelect<T> extends Action {
  type: 'Select';
  Context: {
    Source: string;
  };
  Result: T[];
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

export interface ResponseSelect<T> {
  Context: {
    Target: string;
  } | {
    Source: string;
  };
  ID: string;
  Method: 'Select';
  Result: T[];
}

export interface ResponseGetInfo {
  Context: {
    Target: string;
  } | {
    Source: string;
  };
  ID: string;
  Method: 'GetInfo';
  Result: ArcaInfo;
}

export type ArcaActions = ActionStatus | ActionGetInfo | ActionSelect<AAURow>;
export type ArcaResponses = ResponseSubscribeUnsubscribe | ResponseGetInfo | ResponseSelect<AAURow>

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
