
import {
  State,
  FACADBuiltInCategories,
  FACADParamsBIC,
  FACADSchedules,
  FACADCFT
} from './types';

import { Info } from './types';
import { TasksGanttAAU } from './types-models';

interface ActionConnect {
  type: 'Connect';
};

interface ActionSubscribe {
  type: 'Subscribe';
  Source: keyof State["Source"];
  Subscribed: boolean;
}

interface ActionGetInfo {
  type: 'GetInfo';
  Source: keyof State["Source"];
  Result: Info;
};

interface ActionSelect<Row> {
  type: 'Select';
  Source: keyof State["Source"];
  Result: Row[];
};

interface ActionRequest {
  type: 'Insert' | 'Delete' | 'Update';
  ID: string;
  Source: keyof State["Source"];
  Success?: boolean;
};

interface ActionNotificate<Source, Row> {
  type: 'insert' | 'delete' | 'update';
  ID: string;
  Source: Source;
  Row: Row;
}

export type Action = ActionConnect | ActionGetInfo | ActionSubscribe | ActionRequest |

ActionSelect<TasksGanttAAU["Row"]> |
ActionSelect<FACADParamsBIC["Row"]> |
ActionSelect<FACADBuiltInCategories["Row"]> |
ActionSelect<FACADSchedules["Row"]> |
ActionSelect<FACADCFT["Row"]> |

ActionNotificate<'Tasks-Gantt-AAU', TasksGanttAAU["Row"]> |

ActionNotificate<'FACAD-BuiltInCategories', FACADBuiltInCategories["Row"]> |
ActionNotificate<'FACAD-ParamsBIC', FACADParamsBIC["Row"]> |
ActionNotificate<'FACAD-Schedules', FACADSchedules["Row"]> |
ActionNotificate<'FACAD-CFT', FACADCFT["Row"]>;
