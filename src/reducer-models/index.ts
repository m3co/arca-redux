
import * as Projects from './projects';
import * as Contractors from './contractors';
import * as AAU from './aau';
import * as AAUQTO from './aau-qto';
import * as AAUTasksGantt from './aau-tasks-gantt';
import * as Concretize from './concretize';

import * as APU from './apu';
import * as APUQTO from './apu-qto';
import * as APUTasks from './apu-tasks';
import * as APUImportSupplies from './apu-import-supplies';
import * as APUPSupplies from './apu-p-supplies';
import * as APUMetasupplies from './apu-metasupplies';
import * as APUAssign from './apu-assign';

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

function UpdateDummy(state: State, row: Row, pk?: PK): State {
  console.error('Update not implemented for row', row, pk);
  return state;
}
function DeleteDummy(state: State, row: Row): State {
  console.error('Delete not implemented for row', row);
  return state;
}

export const reducers = {
  'Projects': {
    Update: Projects.Update,
    Delete: Projects.Delete,
  },
  'Contractors': {
    Update: Contractors.Update,
    Delete: Contractors.Delete,
  },
  'FACAD-Reports': {
    Update: FACADReports.Update,
    Delete: FACADReports.Delete,
  },
  'FACAD-ReportFilters': {
    Update: FACADReportFilters.Update,
    Delete: FACADReportFilters.Delete,
  },
  'FACAD-CFT-AAU': {
    Update: FACADCFT.Update,
    Delete: FACADCFT.Delete,
  },
  'FACAD-CFT-Filters-AAU': {
    Update: FACADCFTFilters.Update,
    Delete: FACADCFTFilters.Delete,
  },
  'FACAD-preCFT-AAU': {
    Update: FACADpreCFT.Update,
    Delete: FACADpreCFT.Delete,
  },
  'FACAD-preCFT-AAU-Key': {
    Update: FACADpreCFTKey.Update,
    Delete: DeleteDummy,
  },
  'FACAD-BuiltInCategories': {
    Update: UpdateDummy,
    Delete: DeleteDummy,
  },
  'FACAD-ParamsBIC': {
    Update: UpdateDummy,
    Delete: DeleteDummy,
  },
  'AAU': {
    Update: AAU.Update,
    Delete: AAU.Delete,
  },
  'AAU-QTO': {
    Update: AAUQTO.Update,
    Delete: AAUQTO.Delete,
  },
  'AAU-Tasks-Gantt': {
    Update: AAUTasksGantt.Update,
    Delete: AAUTasksGantt.Delete,
  },
  'AAU-Concretize': {
    Update: Concretize.Update,
    Delete: Concretize.Delete,
  },
  'APU': {
    Update: APU.Update,
    Delete: APU.Delete,
  },
  'APU-QTO': {
    Update: APUQTO.Update,
    Delete: APUQTO.Delete,
  },
  'APU-Tasks': {
    Update: APUTasks.Update,
    Delete: APUTasks.Delete,
  },
  'APU-Import-Supplies': {
    Update: APUImportSupplies.Update,
    Delete: APUImportSupplies.Delete,
  },
  'APU-P-Supplies': {
    Update: APUPSupplies.Update,
    Delete: APUPSupplies.Delete,
  },
  'APU-MetaSupplies': {
    Update: APUMetasupplies.Update,
    Delete: APUMetasupplies.Delete,
  },
  'APU-Assign': {
    Update: APUAssign.Update,
    Delete: APUAssign.Delete,
  },
  'Budget-AAU': {
    Update: BudgetAAU.Update,
    Delete: BudgetAAU.Delete,
  },
  'Budget-AAU-vs-General': {
    Update: BudgetAAUvsGeneral.Update,
    Delete: BudgetAAUvsGeneral.Delete,
  },
  'Tasks-Month-CashFlow-AAU': {
    Update: TasksMonthCashFlowAAU.Update,
    Delete: TasksMonthCashFlowAAU.Delete,
  }
}
