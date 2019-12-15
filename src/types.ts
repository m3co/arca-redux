
import {
  Projects,
  Contractors,
  AAU,
  AAUQTO,
  AAUTasksGantt,
  Concretize,
  FACADBuiltInCategories,
  FACADParamsBIC,
  FACADReports,
  FACADReportFilters,
  FACADCFT,
  FACADCFTFilters,
  FACADpreCFT,
  BudgetAAUvsGeneral,
  BudgetAAU,
  TasksMonthCashFlowAAU,
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
  Contractors["Row"] &
  AAU["Row"] &
  AAUQTO["Row"] &
  AAUTasksGantt["Row"] &
  Concretize["Row"] &
  FACADReports["Row"] &
  FACADParamsBIC["Row"] &
  FACADCFT["Row"] &
  FACADCFTFilters["Row"] &
  FACADpreCFT["Row"] &
  FACADReportFilters["Row"] &
  FACADBuiltInCategories["Row"] &
  BudgetAAUvsGeneral["Row"] &
  BudgetAAU["Row"] &
  TasksMonthCashFlowAAU["Row"];

export type Row =
  Projects["Row"] |
  Contractors["Row"] |
  AAU["Row"] |
  AAUQTO["Row"] |
  AAUTasksGantt["Row"] |
  Concretize["Row"] |
  FACADReports["Row"] |
  FACADParamsBIC["Row"] |
  FACADCFT["Row"] |
  FACADCFTFilters["Row"] |
  FACADpreCFT["Row"] |
  FACADReportFilters["Row"] |
  FACADBuiltInCategories["Row"] |
  BudgetAAUvsGeneral["Row"] |
  BudgetAAU["Row"] |
  TasksMonthCashFlowAAU["Row"];

export type Model =
  Projects |
  Contractors |
  AAU |
  AAUQTO |
  AAUTasksGantt |
  Concretize |
  FACADReports |
  FACADParamsBIC |
  FACADCFT |
  FACADCFTFilters |
  FACADpreCFT |
  FACADReportFilters |
  FACADBuiltInCategories |
  BudgetAAUvsGeneral |
  BudgetAAU |
  TasksMonthCashFlowAAU;

export interface State {
  Connected: boolean;
  Source: {
    'Projects': {
      Rows: Projects["Row"][];
      Requests: string[];
      Subscribed?: boolean;
      Info?: Info;
    };
    'Contractors': {
      Rows: Contractors["Row"][];
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
    'FACAD-CFTFilters': {
      Rows: FACADCFTFilters["Row"][];
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
    'Budget-AAU-vs-General': {
      Rows: BudgetAAUvsGeneral["Row"][];
      Requests: string[];
      Subscribed?: boolean;
      Info?: Info;
    };
    'Budget-AAU': {
      Rows: BudgetAAU["Row"][];
      Requests: string[];
      Subscribed?: boolean;
      Info?: Info;
    };
    'Tasks-Month-CashFlow-AAU': {
      Rows: TasksMonthCashFlowAAU["Row"][];
      Requests: string[];
      Subscribed?: boolean;
      Info?: Info;
    }
  };
};

export { Action } from './types-actions';
export { Response } from './types-responses';
