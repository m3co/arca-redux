
import * as AAU from './aau';
import * as AAUQTO from './aau-qto';
import * as AAUTasksGantt from './aau-tasks-gantt';

import * as FACADReports from './facad-reports';
import * as FACADCFT from './facad-cft';
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
  'FACAD-Reports': {
    Update: FACADReports.Update,
    Delete: FACADReports.Delete,
  },
  'FACAD-CFT': {
    Update: FACADCFT.Update,
    Delete: FACADCFT.Delete,
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
}
