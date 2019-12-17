
import {
  State,
  Projects,
  Concretize,
  AAU,
  AAUQTO,
  AAUTasksGantt,
  APU,
  APUImportSupplies,
  APUMetaSupplies,
  APUPSupplies,
  APUQTO,
  APUAssign,
  FACADBuiltInCategories,
  FACADParamsBIC,
  FACADReports,
  FACADReportFilters,
  FACADCFT,
  FACADCFTFilters,
  FACADpreCFT,
  BudgetAAUvsGeneral,
  BudgetAAU,
  TasksMonthCashFlowAAU,
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

ActionSelect<APU["Row"]> |
ActionSelect<APUImportSupplies["Row"]> |
ActionSelect<APUMetaSupplies["Row"]> |
ActionSelect<APUPSupplies["Row"]> |
ActionSelect<APUQTO["Row"]> |
ActionSelect<APUAssign["Row"]> |

ActionSelect<FACADParamsBIC["Row"]> |
ActionSelect<FACADBuiltInCategories["Row"]> |
ActionSelect<FACADReports["Row"]> |
ActionSelect<FACADReportFilters["Row"]> |
ActionSelect<FACADCFT["Row"]> |
ActionSelect<FACADCFTFilters["Row"]> |
ActionSelect<FACADpreCFT["Row"]> |

ActionSelect<BudgetAAUvsGeneral["Row"]> |
ActionSelect<BudgetAAU["Row"]> |
ActionSelect<TasksMonthCashFlowAAU["Row"]> |

ActionNotificate<'Projects', Projects["Row"]> |
ActionNotificate<'AAU', AAU["Row"]> |
ActionNotificate<'AAU-QTO', AAUQTO["Row"]> |
ActionNotificate<'AAU-Tasks-Gantt', AAUTasksGantt["Row"]> |
ActionNotificate<'Concretize', Concretize["Row"]> |

ActionNotificate<'APU', APU["Row"]> |
ActionNotificate<'APU-Import-Supplies', APUImportSupplies["Row"]> |
ActionNotificate<'APU-MetaSupplies', APUMetaSupplies["Row"]> |
ActionNotificate<'APU-P-Supplies', APUPSupplies["Row"]> |
ActionNotificate<'APU-QTO', APUQTO["Row"]> |
ActionNotificate<'APU-Assign', APUAssign["Row"]> |

ActionNotificate<'FACAD-BuiltInCategories', FACADBuiltInCategories["Row"]> |
ActionNotificate<'FACAD-ParamsBIC', FACADParamsBIC["Row"]> |
ActionNotificate<'FACAD-Reports', FACADReports["Row"]> |
ActionNotificate<'FACAD-ReportFilters', FACADReportFilters["Row"]> |
ActionNotificate<'FACAD-CFT-AAU', FACADCFT["Row"]> |
ActionNotificate<'FACAD-CFT-Filters-AAU', FACADCFTFilters["Row"]> |
ActionNotificate<'FACAD-preCFT-AAU', FACADpreCFT["Row"]> |

ActionNotificate<'Budget-AAU-vs-General', BudgetAAUvsGeneral["Row"]> |
ActionNotificate<'Budget-AAU', BudgetAAU["Row"]> |
ActionNotificate<'Tasks-Month-CashFlow-AAU', TasksMonthCashFlowAAU["Row"]>;
