import { State } from './../../types/state';

import { createAAUAPUAEUTasksGanttAggs } from './aau-apu-aeu-tasks-gantt';
import { createAUAPUTasksGanttAggs } from './aau-apu-tasks-gantt';
import { createAPUImportSuppliesInAppAggs } from './apu-import-supplies-in-app';

export const getAggsBySpecificSource = (arca: State['Source']) => (source: keyof State['Source']) => {
  switch (source) {
    case 'AAU-APU-AEU-Tasks-Gantt':
      return createAAUAPUAEUTasksGanttAggs(arca[source]);
    case 'AAU-APU-Tasks-Gantt':
      return createAUAPUTasksGanttAggs(arca[source]);
    case 'APU-Import-Supplies-in-App':
      return createAPUImportSuppliesInAppAggs(arca[source]);
    default:
      return;
  }
};
