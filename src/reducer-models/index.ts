
import * as Projects from './projects';
import * as AAU from './aau';
import * as AAUQTO from './aau-qto';
import * as AAUTasksGantt from './aau-tasks-gantt';
import * as Concretize from './concretize';

import * as FACADReports from './facad-reports';
import * as FACADReportFilters from './facad-report-filters';
import * as FACADCFT from './facad-cft';
import * as FACADCFTFilters from './facad-cft-filters';
import * as FACADpreCFT from './facad-precft';

import { State, Model } from '../types';

function UpdateDummy(state: State, row: Model["Row"]): State {
  console.error('Update not implemented for row', row);
  return state;
}
function DeleteDummy(state: State, row: Model["Row"]): State {
  console.error('Delete not implemented for row', row);
  return state;
}

export const reducers = {
  'Projects': {
    Update: Projects.Update,
    Delete: Projects.Delete,
  },
  'FACAD-Reports': {
    Update: FACADReports.Update,
    Delete: FACADReports.Delete,
  },
  'FACAD-ReportFilters': {
    Update: FACADReportFilters.Update,
    Delete: FACADReportFilters.Delete,
  },
  'FACAD-CFT': {
    Update: FACADCFT.Update,
    Delete: FACADCFT.Delete,
  },
  'FACAD-CFTFilters': {
    Update: FACADCFTFilters.Update,
    Delete: FACADCFTFilters.Delete,
  },
  'FACAD-preCFT': {
    Update: FACADpreCFT.Update,
    Delete: FACADpreCFT.Delete,
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
  'Concretize': {
    Update: Concretize.Update,
    Delete: Concretize.Delete,
  },
}
