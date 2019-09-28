
import {
  Projects,
  AAU,
  AAUQTO,
  AAUTasksGantt,
  Concretize,
  FACADBuiltInCategories,
  FACADParamsBIC,
  FACADReports,
  FACADReportFilters,
  FACADCFT,
  FACADpreCFT,
} from './types-models';

export * from './types-models';

export interface Combobox {
  Display: keyof Fields;
  Params: {
    [Key: string]: keyof Fields;
  };
  Source: keyof State["Source"];
  Value: keyof Fields;
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
  Projects["Row"] &
  AAU["Row"] &
  AAUQTO["Row"] &
  AAUTasksGantt["Row"] &
  Concretize["Row"] &
  FACADReports["Row"] &
  FACADParamsBIC["Row"] &
  FACADCFT["Row"] &
  FACADpreCFT["Row"] &
  FACADReportFilters["Row"] &
  FACADBuiltInCategories["Row"];

export type Row =
  Projects["Row"] |
  AAU["Row"] |
  AAUQTO["Row"] |
  AAUTasksGantt["Row"] |
  Concretize["Row"] |
  FACADReports["Row"] |
  FACADParamsBIC["Row"] |
  FACADCFT["Row"] |
  FACADpreCFT["Row"] |
  FACADReportFilters["Row"] |
  FACADBuiltInCategories["Row"];

export type Model =
  Projects |
  AAU |
  AAUQTO |
  AAUTasksGantt |
  Concretize |
  FACADReports |
  FACADParamsBIC |
  FACADCFT |
  FACADpreCFT |
  FACADReportFilters |
  FACADBuiltInCategories;

export interface State {
  Connected: boolean;
  Source: {
    'Projects': {
      Rows: Projects["Row"][];
      Requests: string[];
      Subscribed?: boolean;
      Info?: Info;
    };
    'FACAD-ReportFilters': {
      Rows: FACADReportFilters["Row"][];
      Requests: string[];
      Subscribed?: boolean;
      Info?: Info;
    };
    'FACAD-Reports': {
      Rows: FACADReports["Row"][];
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
    'FACAD-preCFT': {
      Rows: FACADpreCFT["Row"][];
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
    'AAU': {
      Rows: AAU["Row"][];
      Requests: string[];
      Subscribed?: boolean;
      Info?: Info;
    };
    'AAU-QTO': {
      Rows: AAUQTO["Row"][];
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
    'Concretize': {
      Rows: Concretize["Row"][];
      Requests: string[];
      Subscribed?: boolean;
      Info?: Info;
    };
  };
};

export { Action } from './types-actions';
export { Response } from './types-responses';
