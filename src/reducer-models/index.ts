
import * as Projects from './projects';
import * as Contractors from './contractors';
import * as AAU from './aau';
import * as AAUQTO from './aau-qto';
import * as AAUTasksGantt from './aau-tasks-gantt';
import * as Concretize from './concretize';
import * as AAUAPUTasksGantt from './aau-apu-tasks-gantt';

import * as APU from './apu';
import * as APUQTO from './apu-qto';
import * as APUTasks from './apu-tasks';
import * as APUTasksGantt from './apu-tasks-gantt';
import * as APUImportSupplies from './apu-import-supplies';
import * as APUPSupplies from './apu-p-supplies';
import * as APUMetasupplies from './apu-metasupplies';
import * as APUAssign from './apu-assign';

import * as AEU from './aeu';

import * as FACADReports from './facad-reports';
import * as FACADReportFilters from './facad-report-filters';
import * as FACADCFT from './facad-cft-aau';
import * as FACADCFTFilters from './facad-cft-filters-aau';
import * as FACADpreCFT from './facad-precft-aau';
import * as FACADpreCFTKey from './facad-cft-aau-key';

import * as BudgetAAU from './budget-aau';
import * as BudgetAAUvsGeneral from './budget-aau-vs-general';
import * as TasksMonthCashFlowAAU from './tasks-month-cashflow-aau';

import { State, Row, PK } from '../types';

function UpdateDummy(_: State, row: Row, pk?: PK): { Rows: Row[] } {
  console.error('Update not implemented for row', row, pk);
  return {
    Rows: []
  };
}
function DeleteDummy(_: State, row: Row): { Rows: Row[] } {
  console.error('Delete not implemented for row', row);
  return {
    Rows: []
  };
}
function Select(_: State, Rows: Row[]): { Rows: Row[] } {
  return {
    Rows
  };
}
function Insert(_: State, rows: Row[], row: Row): { Rows: Row[] } {
  return {
    Rows: [row, ...rows]
  }
}

export const reducers = {
  'Projects': {
    Select: Select,
    Insert: Insert,
    Update: Projects.Update,
    Delete: Projects.Delete,
  },
  'Contractors': {
    Select: Select,
    Insert: Insert,
    Update: Contractors.Update,
    Delete: Contractors.Delete,
  },
  'FACAD-Reports': {
    Select: Select,
    Insert: Insert,
    Update: FACADReports.Update,
    Delete: FACADReports.Delete,
  },
  'FACAD-Report-Filters': {
    Select: Select,
    Insert: Insert,
    Update: FACADReportFilters.Update,
    Delete: FACADReportFilters.Delete,
  },
  'FACAD-CFT-AAU': {
    Select: Select,
    Insert: Insert,
    Update: FACADCFT.Update,
    Delete: FACADCFT.Delete,
  },
  'FACAD-CFT-Filters-AAU': {
    Select: Select,
    Insert: Insert,
    Update: FACADCFTFilters.Update,
    Delete: FACADCFTFilters.Delete,
  },
  'FACAD-preCFT-AAU': {
    Select: Select,
    Insert: Insert,
    Update: FACADpreCFT.Update,
    Delete: FACADpreCFT.Delete,
  },
  'FACAD-preCFT-AAU-Key': {
    Select: Select,
    Insert: Insert,
    Update: FACADpreCFTKey.Update,
    Delete: DeleteDummy,
  },
  'FACAD-BuiltInCategories': {
    Select: Select,
    Insert: Insert,
    Update: UpdateDummy,
    Delete: DeleteDummy,
  },
  'FACAD-ParamsBIC': {
    Select: Select,
    Insert: Insert,
    Update: UpdateDummy,
    Delete: DeleteDummy,
  },
  'AAU': {
    Select: Select,
    Insert: Insert,
    Update: AAU.Update,
    Delete: AAU.Delete,
  },
  'AAU-QTO': {
    Select: Select,
    Insert: Insert,
    Update: AAUQTO.Update,
    Delete: AAUQTO.Delete,
  },
  'AAU-Tasks-Gantt': {
    Select: Select,
    Insert: Insert,
    Update: AAUTasksGantt.Update,
    Delete: AAUTasksGantt.Delete,
  },
  'AAU-APU-Tasks-Gantt': {
    Select: AAUAPUTasksGantt.Select,
    Insert: AAUAPUTasksGantt.Insert,
    Update: AAUAPUTasksGantt.Update,
    Delete: AAUAPUTasksGantt.Delete,
  },
  'AAU-Concretize': {
    Select: Select,
    Insert: Insert,
    Update: Concretize.Update,
    Delete: Concretize.Delete,
  },
  'APU': {
    Select: Select,
    Insert: Insert,
    Update: APU.Update,
    Delete: APU.Delete,
  },
  'APU-QTO': {
    Select: Select,
    Insert: Insert,
    Update: APUQTO.Update,
    Delete: APUQTO.Delete,
  },
  'APU-Tasks': {
    Select: Select,
    Insert: Insert,
    Update: APUTasks.Update,
    Delete: APUTasks.Delete,
  },
  'APU-Tasks-Gantt': {
    Select: Select,
    Insert: Insert,
    Update: APUTasksGantt.Update,
    Delete: APUTasksGantt.Delete,
  },
  'APU-Import-Supplies': {
    Select: Select,
    Insert: Insert,
    Update: APUImportSupplies.Update,
    Delete: APUImportSupplies.Delete,
  },
  'APU-P-Supplies': {
    Select: Select,
    Insert: Insert,
    Update: APUPSupplies.Update,
    Delete: APUPSupplies.Delete,
  },
  'APU-MetaSupplies': {
    Select: Select,
    Insert: Insert,
    Update: APUMetasupplies.Update,
    Delete: APUMetasupplies.Delete,
  },
  'APU-Assign': {
    Select: Select,
    Insert: Insert,
    Update: APUAssign.Update,
    Delete: APUAssign.Delete,
  },
  'AEU': {
    Select: Select,
    Insert: Insert,
    Update: AEU.Update,
    Delete: AEU.Delete,
  },
  'Budget-AAU': {
    Select: Select,
    Insert: Insert,
    Update: BudgetAAU.Update,
    Delete: BudgetAAU.Delete,
  },
  'Budget-AAU-vs-General': {
    Select: Select,
    Insert: Insert,
    Update: BudgetAAUvsGeneral.Update,
    Delete: BudgetAAUvsGeneral.Delete,
  },
  'Tasks-Month-CashFlow-AAU': {
    Select: Select,
    Insert: Insert,
    Update: TasksMonthCashFlowAAU.Update,
    Delete: TasksMonthCashFlowAAU.Delete,
  }
}
