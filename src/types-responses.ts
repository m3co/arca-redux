
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
  FACADReports,
  FACADReportFilters,
  FACADCFT,
  FACADpreCFT,
  FACADCFTFilters,
  BudgetAAUvsGeneral,
  BudgetAAU,
  TasksMonthCashFlowAAU,
} from './types';

import { Info } from './types';

interface ResponseGetInfo {
  Method: 'GetInfo';
  Context: {
    Source: keyof State["Source"];
  };
  Result: Info;
};

interface ResponseSubscribe {
  ID: string;
  Method: 'Subscribe';
  Context: {
    Target: keyof State["Source"];
  };
  Result: 'Success';
}

interface ResponseSelect<Row> {
  Method: 'Select';
  Context: {
    Source: keyof State["Source"];
  };
  Result: Row[];
};

interface ResponseRequest {
  Method: 'Insert' | 'Delete' | 'Update';
  ID: string;
  Context: {
    Source: keyof State["Source"];
  };
  Result: {
    Success: true; // Tal parece aqui hay que corregir, pues YA perdio sentido
    // es muy probable que aqui vaya Row: <Row>
  };
  Error: null;
};

interface Notificate<Row> {
  Method: 'insert' | 'delete' | 'update';
  Context: {
    Source: string;
    Target: keyof State["Source"];
    Notification: true;
  };
  Row: Row;
}

export type Response = ResponseGetInfo | ResponseSubscribe |  ResponseRequest |

ResponseSelect<Projects["Row"]> |
ResponseSelect<AAU["Row"]> |
ResponseSelect<AAUQTO["Row"]> |
ResponseSelect<AAUTasksGantt["Row"]> |
ResponseSelect<Concretize["Row"]> |

ResponseSelect<APU["Row"]> |
ResponseSelect<APUImportSupplies["Row"]> |
ResponseSelect<APUMetaSupplies["Row"]> |
ResponseSelect<APUPSupplies["Row"]> |
ResponseSelect<APUQTO["Row"]> |
ResponseSelect<APUAssign["Row"]> |

ResponseSelect<FACADBuiltInCategories["Row"]> |
ResponseSelect<FACADReports["Row"]> |
ResponseSelect<FACADReportFilters["Row"]> |
ResponseSelect<FACADCFT["Row"]> |
ResponseSelect<FACADCFTFilters["Row"]> |

ResponseSelect<BudgetAAU["Row"]> |
ResponseSelect<BudgetAAUvsGeneral["Row"]> |
ResponseSelect<TasksMonthCashFlowAAU["Row"]> |

Notificate<Projects["Row"]> |
Notificate<AAU["Row"]> |
Notificate<AAUQTO["Row"]> |
Notificate<AAUTasksGantt["Row"]> |
Notificate<Concretize["Row"]> |

Notificate<APU["Row"]> |
Notificate<APUImportSupplies["Row"]> |
Notificate<APUMetaSupplies["Row"]> |
Notificate<APUPSupplies["Row"]> |
Notificate<APUQTO["Row"]> |
Notificate<APUAssign["Row"]> |

Notificate<FACADBuiltInCategories["Row"]> |
Notificate<FACADReports["Row"]> |
Notificate<FACADReportFilters["Row"]> |
Notificate<FACADCFT["Row"]> |
Notificate<FACADCFTFilters["Row"]> |
Notificate<FACADpreCFT["Row"]> |

Notificate<BudgetAAU["Row"]> |
Notificate<BudgetAAUvsGeneral["Row"]> |
Notificate<TasksMonthCashFlowAAU["Row"]>;
