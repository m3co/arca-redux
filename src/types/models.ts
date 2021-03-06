// Projects
export interface Projects {
  Row: {
    ID:          number;
    Name:        string;
    Description: string | null;
    Start:       string | null;
  };
  PK: {
    ID: number;
  };
  Name: 'Projects';
}

// Contractors
export interface Contractors {
  Row: {
    ID:   number;
    Name: string;
  };
  PK: {
    ID: number;
  };
  Name: 'Contractors';
}

// Budget-AAU
export interface BudgetAAU {
  Row: {
    Project:        number;
    Key:            string;
    Description:    string | null;
    Unit:           string | null;
    Q:              number;
    Estimated:      number;
    TotalEstimated: number;
    SummEstimated:  number;
    RateEstimated:  number | null;
    P:              number | null;
  };
  PK: {
    Key: string | [string, string];
  };
  Name: 'Budget-AAU';
}

// Budget-AAU-vs-General
export interface BudgetAAUvsGeneral {
  Row: {
    Project:        number;
    Key:            string;
    Description:    string | null;
    Unit:           string | null;
    Q:              number;
    Estimated:      number;
    TotalEstimated: number;
    SummEstimated:  number;
    RateEstimated:  number | null;
    P:              number | null;
  };
  PK: {
    Key: string | [string, string];
  };
  Name: 'Budget-AAU-vs-General';
}

// Tasks-Month-CashFlow-AAU
export interface TasksMonthCashFlowAAU {
  Row: {
    Project:     number | null;
    Key:         string;
    Description: string | null;
    Unit:        string | null;
    TaskStart:   string | null;
    Start:       string | null;
    End:         string | null;
    TaskEnd:     string | null;
    Days:        number | null;
    TotalDays:   number | null;
    Cost:        number | null;
    TotalCost:   number | null;
  };
  PK: {
    Key?: string | [string, string];
    Project: number | null;
  };
  Name: 'Tasks-Month-CashFlow-AAU';
}

// AAU
export interface AAU {
  Row: {
    Key:         string;
    Expand:      boolean;
    Parent:      string | null;
    Description: string | null;
    Unit:        string | null;
    P:           number | null;
    Estimated:   number;
  };
  PK: {
    Key: string | [string, string];
  };
  Name: 'AAU';
}

// AAU-Concretize
export interface AAUConcretize {
  Row: {
    Project:     number | null;
    Concreted:   boolean;
    Key:         string;
    Parent:      string | null;
    Expand:      boolean;
    Description: string | null;
    Unit:        string | null;
    P:           number | null;
    Estimated:   number;
  };
  PK: {
    Key?:     string | [string, string];
    Project: number | null;
  };
  Name: 'AAU-Concretize';
}

// AAU-QTO
export interface AAUQTO {
  Row: {
    Key:        string;
    Constraint: string;
    Q:          number;
    CAD:        boolean;
  };
  PK: {
    Key:        string | [string, string];
    Constraint: string;
  };
  Name: 'AAU-QTO';
}

// AAU-TaskDefinitions
export interface AAUTaskDefinitions {
  Row: {
    Key:        string;
    Constraint: string;
    Start:      string | null;
    T:          string | null;
  };
  PK: {
    Key:        string | [string, string];
    Constraint: string;
  };
  Name: 'AAU-TaskDefinitions';
}

// AAU-Tasks
export interface AAUTasks {
  Row: {
    Key:        string;
    Constraint: string;
    Start:      string | null;
    End:        string | null;
  };
  PK: {
    Key:        string | [string, string];
    Constraint: string;
  };
  Name: 'AAU-Tasks';
}

// AAU-Tasks-Gantt
export interface AAUTasksGantt {
  Row: {
    Project:     number;
    Key:         string;
    Constraint:  string;
    Description: string;
    Unit:        string | null;
    Start:       string | null;
    End:         string | null;
    P:           number | null;
    Q:           number| null;
    T:           number| null;
  };
  PK: {
    Key: string | [string, string];
    Constraint: string;
  };
  Name: 'AAU-Tasks-Gantt';
}

// AAU-APU-Tasks-Gantt
export interface AAUAPUTasksGantt {
  Row: {
    'APU-ID':          number | null;
    ContractorID:      number | null;
    Status:            string | null;
    Frozen:            boolean | null;
    ExpiredAt:         string | null;
    'APU-Description': string | null;
    'APU-Unit':        string | null;
    'APU-P':           number | null;
    'APU-Q':           number | null;
    'APU-T':           number | null;
    'APU-Start':       string | null;
    'APU-End':         string | null;
    Project:           number;
    Key:               string;
    Constraint:        string | null;
    'AAU-Description': string | null;
    'AAU-Unit':        string | null;
    'AAU-P':           number | null;
    'AAU-Q':           number | null;
    'AAU-T':           number | null;
    'AAU-Start':       string | null;
    'AAU-End':         string | null;
  };
  Agg: {
    Project:     number;
    Key:         string;
    Constraint:  string | null;
    Description: string | null;
    Unit:        string | null;
    P:           number | null;
    Q:           number | null;
    T:           number | null;
    Start:       string | null;
    End:         string | null;
    APU: {
      ID:           number | null;
      ContractorID: number | null;
      Status:       string | null;
      Frozen:       boolean | null;
      ExpiredAt:    string | null;
      Description:  string | null;
      Unit:         string | null;
      P:            number | null;
      Q:            number | null;
      T:            number | null;
      Start:        string | null;
      End:          string | null;
    }[];
  };
  PK: {
    Key:        string | [string, string];
    Constraint: string | null;
    'APU-ID':   number | null;
  };
  Name: 'AAU-APU-Tasks-Gantt';
}

// AAU-APU-AEU-Tasks-Gantt
export interface AAUAPUAEUTasksGantt {
  Row: {
    'APU-ID':          number | null;
    ContractorID:      number | null;
    Status:            string | null;
    Frozen:            boolean | null;
    ExpiredAt:         string | null;
    'APU-Description': string | null;
    'APU-Unit':        string | null;
    'APU-P':           number | null;
    'APU-Q':           number | null;
    'APU-T':           number | null;
    'APU-Start':       string | null;
    'APU-End':         string | null;
    Project:           number;
    Key:               string;
    Constraint:        string | null;
    'AAU-Description': string | null;
    'AAU-Unit':        string | null;
    'AAU-P':           number | null;
    'AAU-Q':           number | null;
    'AAU-T':           number | null;
    'AAU-Start':       string | null;
    'AAU-End':         string | null;
    'AEU-ID':          number | null;
    'ReportedAt':      string | null;
    'AEU-Q':           number | null;
    'AEU-Start':       string | null;
    'AEU-End':         string | null;
  };
  Agg: {
    Project:     number;
    Key:         string;
    Constraint:  string | null;
    Description: string | null;
    Unit:        string | null;
    P:           number | null;
    Q:           number | null;
    T:           number | null;
    Start:       string | null;
    End:         string | null;
    APU: {
      ID:           number | null;
      ContractorID: number | null;
      Status:       string | null;
      Frozen:       boolean | null;
      ExpiredAt:    string | null;
      Description:  string | null;
      Unit:         string | null;
      P:            number | null;
      Q:            number | null;
      T:            number | null;
      Start:        string | null;
      End:          string | null;
      AEU: {
        ID:         number | null;
        ReportedAt: string | null;
        Q:          number | null;
        Start:      string | null;
        End:        string | null;
      }[];
    }[];
  };
  PK: {
    Key:        string | [string, string];
    Constraint: string | null;
    'APU-ID':   number | null;
    'AEU-ID':   number | null;
  };
  Name: 'AAU-APU-Tasks-Gantt';
}

export interface AAUAPUinApp {
  Row: {
    ID:           number | null;
    Expand:       boolean;
    Key:          string;
    Constraint:   string;
    Description:  string | null;
    ContractorID: number;
    ProjectID:    number;
  };
  PK: {
    ID:         number | null;
    Key:        string | [string, string];
    Constraint: string;
  };
  Name: 'AAU-APU-in-App';
}

// APU
export interface APU {
  Row: {
    ID:           number;
    Key:          string;
    Constraint:   string;
    ContractorID: number;
    Description:  string | null;
    Unit:         string | null;
    P:            number;
    Price:        number | null;
    Estimated:    number;
    Frozen:       boolean;
    Status:       string;
    ExpiredAt:    string | null;
  };
  PK: {
    ID: number;
  };
  Name: 'APU';
}

// APU-QTO
export interface APUQTO {
  Row: {
    ID:        number;
    Withdrawn: boolean;
    Q:         number;
  };
  PK: {
    ID:        number;
    Withdrawn: boolean;
  };
  Name: 'APU-QTO';
}

// APU-Tasks
export interface APUTasks {
  Row: {
    ID:    number;
    T:     number | null;
    Start: string | null;
    End:   string | null;
  };
  PK: {
    ID: number;
  };
  Name: 'APU-Tasks';
}

// APU-Tasks-Gantt
export interface APUTasksGantt {
  Row: {
    ID:           number;
    Key:          string;
    Constraint:   string;
    ContractorID: number;
    Description:  string;
    Unit:         string;
    Status:       string;
    Frozen:       boolean;
    ExpiredAt:    string | null;
    P:            number;
    Q:            number;
    T:            number;
    Start:        string | null;
    End:          string | null;
  };
  PK: {
    ID: number;
  };
  Name: 'APU-Tasks-Gantt';
}

// APU-Import-Supplies
export interface APUImportSupplies {
  Row: {
    APUID:       number;
    SupplyID?:    number | null;
    P:           number;
    Description: string | null;
    Unit:        string | null;
    Type:        string | null;
    Estimated:   number | null;
  };
  PK: {
    APUID:    number;
    SupplyID: number | null;
  };
  Name: 'APU-Import-Supplies';
}

// APU-Import-Supplies-in-App
export interface APUImportSuppliesInApp {
  Row: {
    APUID:                     number;
    'APU-ContractorID':        number;
    Key:                       string;
    Constraint:                string;
    'APU-Description':         string;
    'APU-Unit':                string;
    'APU-P':                   number;
    'APU-Estimated':           number;
    'APU-Price':               number | null;
    SupplyID:                  number | null;
    OwnerID:                   number | null;
    P:                         number | null;
    'MetaSupply-Description':  string | null;
    'MetaSupply-Unit':         string | null;
    Type:                      string | null;
    'MetaSupply-Estimated':    number | null;
    'MetaSupply-ContractorID': number | null;
  };
  Agg: {
    APUID:        number;
    ContractorID: number;
    Key:          string;
    Constraint:   string;
    Description:  string;
    Unit:         string;
    P:            number;
    Estimated:    number;
    Price:        number | null;
    Supplies: {
      SupplyID:     number | null;
      OwnerID:      number | null;
      P:            number | null;
      Description:  string | null;
      Unit:         string | null;
      Type:         string | null;
      Estimated:    number | null;
      ContractorID: number | null;
    }[];
  }
  PK: {
    APUID?:    number;
    SupplyID?: number | null;
    ContractorID?: number;
    Constraint?: string;
  };
  Name: 'APU-Import-Supplies-in-App';
}

// APU-MetaSupplies
export interface APUMetaSupplies {
  Row: {
    ID:           number;
    ContractorID: number;
    Description:  string;
    Unit:         string;
    Type:         string;
    Estimated:    number;
  };
  PK: {
    ID: number;
  };
  Name: 'APU-MetaSupplies';
}

// APU-P-Supplies
export interface APUPSupplies {
  Row: {
    SupplyID: number;
    APUID:    number;
    P:        number;
  };
  PK: {
    APUID:    number;
    SupplyID: number;
  };
  Name: 'APU-P-Supplies';
}

// APU-Assign
export interface APUAssign {
  Row: {
    Project:      number;
    Key:          string;
    Constraint:   string;
    Description:  string | null;
    Unit:         string | null;
    Status:       string | null;
    Frozen:       boolean;
    Estimated:    number | null;
    P:            number | null;
    Q:            number | null;
    ID:           number | null;
    ContractorID: number | null;
    Qres:         number;
  };
  PK: {
    ID:         number | null;
    Key:        string | [string, string];
    Constraint: string;
  };
  Name: 'APU-Assign';
}

// AEU
export interface AEU {
  Row: {
    ID:         number;
    ReportedAt: string;
    APUID:      number;
    Q:          number | null;
    Start:      string;
    End:        string | null;
  };
  PK: {
    ID: number;
  };
  Name: 'AEU'
}

// FACAD-ParamsBIC
export interface FACADParamsBIC {
  Row: {
    ReportType:      string;
    BuiltInCategory: string;
    Field:           string;
  };
  PK: {
    ReportType:      string;
    BuiltInCategory: string;
    Field:           string;
  };
  Name: 'FACAD-ParamsBIC';
}

// FACAD-CFT-AAU
export interface FACADCFTAAU {
  Row: {
    ID:              number;
    Family:          string;
    Type:            string;
    Project:         number | null;
    Key:             string;
    KeynoteField:    string | null;
    ConstraintField: string | null;
    QuantityField:   string | null;
    BuiltInCategory: string;
    ReportType:      string;
  };
  PK: {
    ID: number;
  };
  Name: 'FACAD-CFT-AAU';
}

// FACAD-CFT-Filters-AAU
export interface FACADCFTFiltersAAU {
  Row: {
    ID:         number;
    CFTID:      number;
    Field:      string;
    Comparator: string;
    Value:      string;
    ValueType:  string;
  };
  PK: {
    ID: number;
  };
  Name: 'FACAD-CFT-Filters-AAU';
}

// FACAD-preCFT-AAU
export interface FACADpreCFTAAU {
  Row: {
    ID:       number;
    Family:   string;
    Type:     string;
    PathName: string;
  };
  PK: {
    ID: number;
  };
  Name: 'FACAD-preCFT-AAU';
}

// FACAD-preCFT-AAU-Key
export interface FACADpreCFTAAUKey {
  Row: {
    Family: string;
    Type:   string;
    Key:    string | null;
  };
  PK: {
    Family: string;
    Type:   string;
    Key:    string | null;
  };
  Name: 'FACAD-preCFT-AAU-Key';
}

// FACAD-BuiltInCategories
export interface FACADBuiltInCategories {
  Row: {
    BuiltInCategory: string;
  };
  PK: {
    BuiltInCategory: string;
  };
  Name: 'FACAD-BuiltInCategories';
}

// FACAD-Reports
export interface FACADReports {
  Row: {
    ID:              number;
    Name:            string;
    BuiltInCategory: string;
    ReportType:      string;
    PathName:        string;
    Field1:          string;
    Field2:          string;
    Field3:          string;
  };
  PK: {
    ID: number;
  };
  Name: 'FACAD-Reports';
}

// FACAD-Report-Filters
export interface FACADReportFilters {
  Row: {
    ID:         number;
    ReportID:   number;
    Field:      string;
    Comparator: string;
    Value:      string;
    ValueType:  string;
  };
  PK: {
    ID: number;
  };
  Name: 'FACAD-Report-Filters';
}
