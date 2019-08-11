
import {
  AAUTasksGantt,
  FACADBuiltInCategories,
  FACADParamsBIC,
  FACADSchedules,
  FACADCFT
} from './types-models';

export * from './types-models';

export interface Combobox {
  Display: keyof Row;
  Params: {
    [Key: string]: keyof Row;
  };
  Source: keyof State["Source"];
  Value: keyof Row;
}

export interface Field {
  Select?: (string | number)[] | null;
  Combobox?: Combobox | null;
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

export type Fields =
  AAUTasksGantt["Row"] &
  FACADSchedules["Row"] &
  FACADParamsBIC["Row"] &
  FACADCFT["Row"] &
  FACADBuiltInCategories["Row"];

export type Row =
  AAUTasksGantt["Row"] |
  FACADSchedules["Row"] |
  FACADParamsBIC["Row"] |
  FACADCFT["Row"] |
  FACADBuiltInCategories["Row"];

export type Model =
  AAUTasksGantt |
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
    'AAU-Tasks-Gantt': {
      Rows: AAUTasksGantt["Row"][];
      Requests: string[];
      Subscribed?: boolean;
      Info?: Info;
    };
  };
};

export { Action } from './types-actions';
export { Response } from './types-responses';
