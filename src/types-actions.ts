
import {
  State,
  Projects,
  Concretize,
  AAU,
  AAUQTO,
  AAUTasksGantt,
  FACADBuiltInCategories,
  FACADParamsBIC,
  FACADReports,
  FACADReportFilters,
  FACADCFT,
  FACADpreCFT
} from './types';

import { Info } from './types';

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

ActionSelect<Projects["Row"]> |
ActionSelect<AAU["Row"]> |
ActionSelect<AAUQTO["Row"]> |
ActionSelect<AAUTasksGantt["Row"]> |
ActionSelect<Concretize["Row"]> |

ActionSelect<FACADParamsBIC["Row"]> |
ActionSelect<FACADBuiltInCategories["Row"]> |
ActionSelect<FACADReports["Row"]> |
ActionSelect<FACADReportFilters["Row"]> |
ActionSelect<FACADCFT["Row"]> |
ActionSelect<FACADpreCFT["Row"]> |

ActionNotificate<'Projects', Projects["Row"]> |
ActionNotificate<'AAU', AAU["Row"]> |
ActionNotificate<'AAU-QTO', AAUQTO["Row"]> |
ActionNotificate<'AAU-Tasks-Gantt', AAUTasksGantt["Row"]> |
ActionNotificate<'Concretize', Concretize["Row"]> |

ActionNotificate<'FACAD-BuiltInCategories', FACADBuiltInCategories["Row"]> |
ActionNotificate<'FACAD-ParamsBIC', FACADParamsBIC["Row"]> |
ActionNotificate<'FACAD-Reports', FACADReports["Row"]> |
ActionNotificate<'FACAD-ReportFilters', FACADReportFilters["Row"]> |
ActionNotificate<'FACAD-CFT', FACADCFT["Row"]> |
ActionNotificate<'FACAD-preCFT', FACADpreCFT["Row"]>;
