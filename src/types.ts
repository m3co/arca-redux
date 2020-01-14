
import {
  Projects,
  Contractors,
  AAU,
  AAUConcretize,
  AAUQTO,
  AAUTasksGantt,
  APU,
  APUImportSupplies,
  APUMetaSupplies,
  APUPSupplies,
  APUQTO,
  APUTasks,
  APUAssign,
  AEU,
  FACADBuiltInCategories,
  FACADParamsBIC,
  FACADReports,
  FACADReportFilters,
  FACADCFTAAU,
  FACADCFTFiltersAAU,
  FACADpreCFTAAU,
  FACADpreCFTAAUKey,
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
  AAUConcretize["Row"] &
  APU["Row"] &
  APUImportSupplies["Row"] &
  APUMetaSupplies["Row"] &
  APUPSupplies["Row"] &
  APUQTO["Row"] &
  APUTasks["Row"] &
  APUAssign["Row"] &
  AEU["Row"] &
  FACADReports["Row"] &
  FACADParamsBIC["Row"] &
  FACADCFTAAU["Row"] &
  FACADCFTFiltersAAU["Row"] &
  FACADpreCFTAAU["Row"] &
  FACADpreCFTAAUKey["Row"] &
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
  AAUConcretize["Row"] |
  APU["Row"] |
  APUImportSupplies["Row"] |
  APUMetaSupplies["Row"] |
  APUPSupplies["Row"] |
  APUQTO["Row"] |
  APUTasks["Row"] |
  APUAssign["Row"] |
  AEU["Row"] |
  FACADReports["Row"] |
  FACADParamsBIC["Row"] |
  FACADCFTAAU["Row"] |
  FACADCFTFiltersAAU["Row"] |
  FACADpreCFTAAU["Row"] |
  FACADpreCFTAAUKey["Row"] |
  FACADReportFilters["Row"] |
  FACADBuiltInCategories["Row"] |
  BudgetAAUvsGeneral["Row"] |
  BudgetAAU["Row"] |
  TasksMonthCashFlowAAU["Row"];

export type PK =
  Projects["PK"] |
  Contractors["PK"] |
  AAU["PK"] |
  AAUQTO["PK"] |
  AAUTasksGantt["PK"] |
  AAUConcretize["PK"] |
  APU["PK"] |
  APUImportSupplies["PK"] |
  APUMetaSupplies["PK"] |
  APUPSupplies["PK"] |
  APUQTO["PK"] |
  APUTasks["PK"] |
  APUAssign["PK"] |
  AEU["PK"] |
  FACADReports["PK"] |
  FACADParamsBIC["PK"] |
  FACADCFTAAU["PK"] |
  FACADCFTFiltersAAU["PK"] |
  FACADpreCFTAAU["PK"] |
  FACADpreCFTAAUKey["PK"] |
  FACADReportFilters["PK"] |
  FACADBuiltInCategories["PK"] |
  BudgetAAUvsGeneral["PK"] |
  BudgetAAU["PK"] |
  TasksMonthCashFlowAAU["PK"];

export type Model =
  Projects |
  Contractors |
  AAU |
  AAUQTO |
  AAUTasksGantt |
  AAUConcretize |
  APU |
  APUImportSupplies |
  APUMetaSupplies |
  APUPSupplies |
  APUQTO |
  APUTasks |
  APUAssign |
  AEU |
  FACADReports |
  FACADParamsBIC |
  FACADCFTAAU |
  FACADCFTFiltersAAU |
  FACADpreCFTAAU |
  FACADpreCFTAAUKey |
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
    'FACAD-CFT-AAU': {
      Rows: FACADCFTAAU["Row"][];
      Requests: string[];
      Subscribed?: boolean;
      Info?: Info;
    };
    'FACAD-CFT-Filters-AAU': {
      Rows: FACADCFTFiltersAAU["Row"][];
      Requests: string[];
      Subscribed?: boolean;
      Info?: Info;
    };
    'FACAD-preCFT-AAU': {
      Rows: FACADpreCFTAAU["Row"][];
      Requests: string[];
      Subscribed?: boolean;
      Info?: Info;
    };
    'FACAD-preCFT-AAU-Key': {
      Rows: FACADpreCFTAAUKey["Row"][];
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
    'AAU-Concretize': {
      Rows: AAUConcretize["Row"][];
      Requests: string[];
      Subscribed?: boolean;
      Info?: Info;
    };
    'APU': {
      Rows: APU["Row"][];
      Requests: string[];
      Subscribed?: boolean;
      Info?: Info;
    };
    'APU-Import-Supplies': {
      Rows: APUImportSupplies["Row"][];
      Requests: string[];
      Subscribed?: boolean;
      Info?: Info;
    };
    'APU-MetaSupplies': {
      Rows: APUMetaSupplies["Row"][];
      Requests: string[];
      Subscribed?: boolean;
      Info?: Info;
    };
    'APU-P-Supplies': {
      Rows: APUPSupplies["Row"][];
      Requests: string[];
      Subscribed?: boolean;
      Info?: Info;
    };
    'APU-QTO': {
      Rows: APUQTO["Row"][];
      Requests: string[];
      Subscribed?: boolean;
      Info?: Info;
    };
    'APU-Tasks': {
      Rows: APUTasks["Row"][];
      Requests: string[];
      Subscribed?: boolean;
      Info?: Info;
    };
    'APU-Assign': {
      Rows: APUAssign["Row"][];
      Requests: string[];
      Subscribed?: boolean;
      Info?: Info;
    };
    'AEU': {
      Rows: AEU["Row"][];
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
