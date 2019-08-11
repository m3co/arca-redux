import * as FACADSchedules from './facad-schedules';
import * as FACADCFT from './facad-cft';
import * as TasksGanttAAU from './facad-cft';

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
  'FACAD-Schedules': {
    Update: FACADSchedules.Update,
    Delete: FACADSchedules.Delete,
  },
  'FACAD-CFT': {
    Update: FACADCFT.Update,
    Delete: FACADCFT.Delete,
  },
  'FACAD-BuiltInCategories': {
    Update: UpdateDummy,
    Delete: DeleteDummy,
  },
  'FACAD-ParamsBIC': {
    Update: UpdateDummy,
    Delete: DeleteDummy,
  },
  'Tasks-Gantt-AAU': {
    Update: TasksGanttAAU.Update,
    Delete: TasksGanttAAU.Delete,
  },
}
