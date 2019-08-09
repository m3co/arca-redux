
import {
  FACADBuiltInCategories,
  FACADParamsBIC,
  FACADSchedules,
  FACADCFT
} from './types-models';

export * from './types-models';

export interface Field {
  Select?: {} | null;
  Combobox?: {} | null;
  Editable: boolean;
  Name: string;
  Primary: boolean;
  Required: boolean;
  Type: string;
};

export interface Info {
  Actions: {
    Delete: boolean;
    Insert: boolean;
    Update: boolean;
  };
  Fields: Field[];
};

export type Row =
  FACADSchedules["Row"] |
  FACADParamsBIC["Row"] |
  FACADCFT["Row"] |
  FACADBuiltInCategories["Row"];

export type Model =
  FACADSchedules |
  FACADParamsBIC |
  FACADCFT |
  FACADBuiltInCategories;

export interface State {
  Connected: boolean;
  Source: {
    'FACAD-Schedules': {
      Rows: FACADSchedules["Row"][];
      Requests: string[];
      Subscribed?: boolean;
      Info?: Info;
    };
    'FACAD-ParamsBIC': {
      Rows: FACADParamsBIC["Row"][];
      Requests: string[];
      Subscribed?: boolean;
      Info?: Info;
    };
    'FACAD-CFT': {
      Rows: FACADCFT["Row"][];
      Requests: string[];
      Subscribed?: boolean;
      Info?: Info;
    };
    'FACAD-BuiltInCategories': {
      Rows: FACADBuiltInCategories["Row"][];
      Requests: string[];
      Subscribed?: boolean;
      Info?: Info;
    };
  };
};

export { Action } from './types-actions';
export { Response } from './types-responses';
