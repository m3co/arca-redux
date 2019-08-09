
import {
  State,
  FACADBuiltInCategories,
  FACADSchedules,
  FACADCFT
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

export type Response = ResponseGetInfo | ResponseSubscribe |

ResponseSelect<FACADBuiltInCategories["Row"]> |
ResponseSelect<FACADSchedules["Row"]> |
ResponseSelect<FACADCFT["Row"]> |

ResponseRequest |

Notificate<FACADBuiltInCategories["Row"]> |
Notificate<FACADSchedules["Row"]> |
Notificate<FACADCFT["Row"]>;
