
import {
  State,
  AAU,
  AAUQTO,
  AAUTasksGantt,
  FACADBuiltInCategories,
  FACADReports,
  FACADReportFilters,
  FACADCFT,
  FACADpreCFT
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
    Success: true;
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

ResponseSelect<AAU["Row"]> |
ResponseSelect<AAUQTO["Row"]> |
ResponseSelect<AAUTasksGantt["Row"]> |

ResponseSelect<FACADBuiltInCategories["Row"]> |
ResponseSelect<FACADReports["Row"]> |
ResponseSelect<FACADReportFilters["Row"]> |
ResponseSelect<FACADCFT["Row"]> |

Notificate<AAU["Row"]> |
Notificate<AAUQTO["Row"]> |
Notificate<AAUTasksGantt["Row"]> |

Notificate<FACADBuiltInCategories["Row"]> |
Notificate<FACADReports["Row"]> |
Notificate<FACADCFT["Row"]> |
Notificate<FACADpreCFT["Row"]>;
