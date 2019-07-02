
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

export interface ActionSelect<Source, Row> extends Action {
  type: 'Select';
  Context: {
    Source: Source;
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

export interface ActionResponseDUI extends Action {
  type: 'ResponseDUI';
  Context: {
    Source: string;
  };
  ID: string;
  Method: 'Delete' | 'Update' | 'Insert';
  Success: true;
}

export interface ActionRequestDUI extends Action {
  type: 'RequestDUI';
  Context: {
    Source: string;
  };
  ID: string;
  Method: 'Delete' | 'Update' | 'Insert';
  Params: {
    Row?: ArcaEntries["Row"];
    PK?: ArcaEntries["PK"];
  };
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

export interface ResponseSelect<Source, Row> {
  Context: {
    Source: Source;
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

export type ArcaActionsNotify =
  ActionNotify<'AAU', AAU['Row']> |
  ActionNotify<'FACAD-BuiltInCategories', FACADBuiltInCategories['Row']> |
  ActionNotify<'FACAD-ParamsBIC', FACADParamsBIC['Row']> |
  ActionNotify<'FACAD-Schedules', FACADSchedules['Row']> |
  ActionNotify<'FACAD-CFT', FACADCFT['Row']>;

export type ArcaActionsSelect =
ActionSelect<'AAU', AAU['Row']> |
ActionSelect<'FACAD-BuiltInCategories', FACADBuiltInCategories['Row']> |
ActionSelect<'FACAD-ParamsBIC', FACADParamsBIC['Row']> |
ActionSelect<'FACAD-Schedules', FACADSchedules['Row']> |
ActionSelect<'FACAD-CFT', FACADCFT['Row']>;

export type ArcaActions = ActionStatus | ActionGetInfo | ArcaActionsNotify | ArcaActionsSelect |
  ActionRequestDUI | ActionResponseDUI;

export type ArcaResponses = ResponseSubscribeUnsubscribe | ResponseGetInfo | ResponseDUI |
ResponseSelect<'AAU', AAU['Row']> | Notification<'AAU', AAU['Row']> |
ResponseSelect<'FACAD-BuiltInCategories', FACADBuiltInCategories['Row']> | Notification<'FACAD-BuiltInCategories', FACADBuiltInCategories['Row']> |
ResponseSelect<'FACAD-ParamsBIC', FACADParamsBIC['Row']> | Notification<'FACAD-ParamsBIC', FACADParamsBIC['Row']> |
ResponseSelect<'FACAD-Schedules', FACADSchedules['Row']> | Notification<'FACAD-Schedules', FACADSchedules['Row']> |
ResponseSelect<'FACAD-CFT', FACADCFT['Row']> | Notification<'FACAD-CFT', FACADCFT['Row']>;

export interface RequestResponses {
  [ID: string]: {
    Context: {
      Source: string
    },
    Params: {
      PK?: ArcaEntries["PK"],
      Row?: ArcaEntries["Row"],
    }
  }
};

export interface ArcaState {
  Sources: {
    AAU: {
      Rows: AAU['Row'][];
      Info: ArcaInfo | null;
      RequestResponses: RequestResponses;
    };
    FACADBuiltInCategories: {
      Rows: FACADBuiltInCategories['Row'][];
      Info: ArcaInfo | null;
      RequestResponses: RequestResponses;
    };
    FACADParamsBIC: {
      Rows: FACADParamsBIC['Row'][];
      Info: ArcaInfo | null;
      RequestResponses: RequestResponses;
    };
    FACADSchedules: {
      Rows: FACADSchedules['Row'][];
      Info: ArcaInfo | null;
      RequestResponses: RequestResponses;
    };
    FACADCFT: {
      Rows: FACADCFT['Row'][];
      Info: ArcaInfo | null;
      RequestResponses: RequestResponses;
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

export type ReportType = 'Schedule' | 'MaterialTakeoff' | 'KeynoteLegend' | 'KeySchedule' | 'RevisionSchedule' | 'NoteBlock';

export interface FACADBuiltInCategories {
  Row: {
    BuiltInCategory: string;
  };
  PK: {
    BuiltInCategory: string;
  };
}

export interface FACADParamsBIC {
  Row: {
    ReportType: ReportType;
    BuiltInCategory: string;
    Field: string;
  };
  PK: {
    ReportType: ReportType;
    BuiltInCategory: string;
    Field: string;
  };
}

export interface FACADSchedules {
  Row: {
    ID: number;
    Name: string;
    BuiltInCategory: string;
    PathName: string;
  };
  PK: {
    ID: number;
  };
}

export interface FACADCFT {
  Row: {
    ID: number
    Project: number
    Category: string
    FamilyType: string
    Key: string
    KeynoteField: string
    ConstraintField: string
    QuantityField: string
    BuiltInCategory: string
    ReportType: string
  }
  PK: {
    ID: number;
  };
}

export type ArcaEntries =
  AAU |
  FACADBuiltInCategories |
  FACADParamsBIC |
  FACADSchedules |
  FACADCFT;
