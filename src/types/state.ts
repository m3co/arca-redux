import {
  Projects,
  Contractors,
  AAU,
  AAUConcretize,
  AAUQTO,
  AAUTasksGantt,
  AAUAPUTasksGantt,
  AAUAPUAEUTasksGantt,
  AAUAPUinApp,
  APU,
  APUImportSupplies,
  APUImportSuppliesInApp,
  APUMetaSupplies,
  APUPSupplies,
  APUQTO,
  APUTasks,
  APUTasksGantt,
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
} from './models';

export type Row =
  Projects['Row'] |
  Contractors['Row'] |
  AAU['Row'] |
  AAUQTO['Row'] |
  AAUTasksGantt['Row'] |
  AAUAPUTasksGantt['Row'] |
  AAUAPUAEUTasksGantt['Row'] |
  AAUConcretize['Row'] |
  AAUAPUinApp['Row'] |
  APU['Row'] |
  APUImportSupplies['Row'] |
  APUImportSuppliesInApp['Row'] |
  APUMetaSupplies['Row'] |
  APUPSupplies['Row'] |
  APUQTO['Row'] |
  APUTasks['Row'] |
  APUTasksGantt['Row'] |
  APUAssign['Row'] |
  AEU['Row'] |
  FACADReports['Row'] |
  FACADParamsBIC['Row'] |
  FACADCFTAAU['Row'] |
  FACADCFTFiltersAAU['Row'] |
  FACADpreCFTAAU['Row'] |
  FACADpreCFTAAUKey['Row'] |
  FACADReportFilters['Row'] |
  FACADBuiltInCategories['Row'] |
  BudgetAAUvsGeneral['Row'] |
  BudgetAAU['Row'] |
  TasksMonthCashFlowAAU['Row'];

export type PK =
  Projects['PK'] |
  Contractors['PK'] |
  AAU['PK'] |
  AAUQTO['PK'] |
  AAUTasksGantt['PK'] |
  AAUAPUTasksGantt['PK'] |
  AAUAPUAEUTasksGantt['PK'] |
  AAUConcretize['PK'] |
  AAUAPUinApp['PK'] |
  APU['PK'] |
  APUImportSupplies['PK'] |
  APUImportSuppliesInApp['PK'] |
  APUMetaSupplies['PK'] |
  APUPSupplies['PK'] |
  APUQTO['PK'] |
  APUTasks['PK'] |
  APUTasksGantt['PK'] |
  APUAssign['PK'] |
  AEU['PK'] |
  FACADReports['PK'] |
  FACADParamsBIC['PK'] |
  FACADCFTAAU['PK'] |
  FACADCFTFiltersAAU['PK'] |
  FACADpreCFTAAU['PK'] |
  FACADpreCFTAAUKey['PK'] |
  FACADReportFilters['PK'] |
  FACADBuiltInCategories['PK'] |
  BudgetAAUvsGeneral['PK'] |
  BudgetAAU['PK'] |
  TasksMonthCashFlowAAU['PK'];

export type Model =
  Projects |
  Contractors |
  AAU |
  AAUQTO |
  AAUTasksGantt |
  AAUAPUTasksGantt |
  AAUAPUAEUTasksGantt |
  AAUConcretize |
  AAUAPUinApp |
  APU |
  APUImportSupplies |
  APUImportSuppliesInApp |
  APUMetaSupplies |
  APUPSupplies |
  APUQTO |
  APUTasks |
  APUTasksGantt |
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
  Source: {
    'Projects': Projects['Row'][];
    'Contractors': Contractors['Row'][];
    'FACAD-Report-Filters': FACADReportFilters['Row'][];
    'FACAD-Reports': FACADReports['Row'][];
    'FACAD-ParamsBIC': FACADParamsBIC['Row'][];
    'FACAD-CFT-AAU': FACADCFTAAU['Row'][];
    'FACAD-CFT-Filters-AAU': FACADCFTFiltersAAU['Row'][];
    'FACAD-preCFT-AAU': FACADpreCFTAAU['Row'][];
    'FACAD-preCFT-AAU-Key': FACADpreCFTAAUKey['Row'][];
    'FACAD-BuiltInCategories': FACADBuiltInCategories['Row'][];
    'AAU': AAU['Row'][];
    'AAU-QTO': AAUQTO['Row'][];
    'AAU-Tasks-Gantt': AAUTasksGantt['Row'][];
    'AAU-APU-Tasks-Gantt': AAUAPUTasksGantt['Row'][];
    'AAU-APU-AEU-Tasks-Gantt': AAUAPUAEUTasksGantt['Row'][];
    'AAU-Concretize': AAUConcretize['Row'][];
    'AAU-APU-in-App': AAUAPUinApp['Row'][];
    'APU': APU['Row'][];
    'APU-Import-Supplies': APUImportSupplies['Row'][];
    'APU-Import-Supplies-in-App': APUImportSuppliesInApp['Row'][];
    'APU-MetaSupplies': APUMetaSupplies['Row'][];
    'APU-P-Supplies': APUPSupplies['Row'][];
    'APU-QTO': APUQTO['Row'][];
    'APU-Tasks': APUTasks['Row'][];
    'APU-Tasks-Gantt': APUTasksGantt['Row'][];
    'APU-Assign': APUAssign['Row'][];
    'AEU': AEU['Row'][];
    'Budget-AAU-vs-General': BudgetAAUvsGeneral['Row'][];
    'Budget-AAU': BudgetAAU['Row'][];
    'Tasks-Month-CashFlow-AAU': TasksMonthCashFlowAAU['Row'][]
  };
}
