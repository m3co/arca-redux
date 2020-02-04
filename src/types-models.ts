
// Projects
export interface Projects {
  Row: {
    ID:          number;
    Name:        string;
    Description: string | null;
    Start:       Date | null;
  };
  PK: {
    ID: number;
  };
  Name: 'Projects';
};

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
};

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
    Key: string;
  };
  Name: 'Budget-AAU';
};

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
    Key: string;
  };
  Name: 'Budget-AAU-vs-General';
};

// Tasks-Month-CashFlow-AAU
export interface TasksMonthCashFlowAAU {
  Row: {
    Project:     number | null;
    Key:         string;
    Description: string | null;
    Unit:        string | null;
    TaskStart:   Date | null;
    Start:       Date | null;
    End:         Date | null;
    TaskEnd:     Date | null;
    Days:        number | null;
    TotalDays:   number | null;
    Cost:        number | null;
    TotalCost:   number | null;
  };
  PK: {
    Key: string;
  };
  Name: 'Tasks-Month-CashFlow-AAU';
};

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
    Key: string;
  };
  Name: 'AAU';
};

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
    Key:     string;
    Project: number | null;
  };
  Name: 'AAU-Concretize';
};

// AAU-QTO
export interface AAUQTO {
  Row: {
    Key:        string;
    Constraint: string;
    Q:          number;
    CAD:        boolean;
  };
  PK: {
    Key:        string;
    Constraint: string;
  };
  Name: 'AAU-QTO';
};

// AAU-TaskDefinitions
export interface AAUTaskDefinitions {
  Row: {
    Key:        string;
    Constraint: string;
    Start:      Date | null;
    T:          Date | null;
  };
  PK: {
    Key:        string;
    Constraint: string;
  };
  Name: 'AAU-TaskDefinitions';
};

// AAU-Tasks
export interface AAUTasks {
  Row: {
    Key:        string;
    Constraint: string;
    Start:      Date | null;
    End:        Date | null;
  };
  PK: {
    Key:        string;
    Constraint: string;
  };
  Name: 'AAU-Tasks';
};

// AAU-Tasks-Gantt
export interface AAUTasksGantt {
  Row: {
    Project:     number;
    Key:         string;
    Constraint:  string;
    Description: string;
    Unit:        string | null;
    Start:       Date | null;
    End:         Date | null;
    P:           number | null;
    Q:           number| null;
    T:           number| null;
  };
  PK: {
    Key: string;
    Constraint: string;
  };
  Name: 'AAU-Tasks-Gantt';
};

// AAU-APU-Tasks-Gantt
export interface AAUAPUTasksGantt {
  Row: {
    'APU-ID':          number | null;
    ContractorID:      number | null;
    Status:            string | null;
    Frozen:            boolean | null;
    ExpiredAt:         Date | null;
    'APU-Description': string | null;
    'APU-Unit':        string | null;
    'APU-P':           number | null;
    'APU-Q':           number | null;
    'APU-T':           number | null;
    'APU-Start':       Date | null;
    'APU-End':         Date | null;
    Project:           number;
    Key:               string;
    Constraint:        string | null;
    'AAU-Description': string | null;
    'AAU-Unit':        string | null;
    'AAU-P':           number | null;
    'AAU-Q':           number | null;
    'AAU-T':           number | null;
    'AAU-Start':       Date | null;
    'AAU-End':         Date | null;
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
    Start:       Date | null;
    End:         Date | null;
    APU: {
      ID:           number | null;
      ContractorID: number | null;
      Status:       string | null;
      Frozen:       boolean | null;
      ExpiredAt:    Date | null;
      Description:  string | null;
      Unit:         string | null;
      P:            number | null;
      Q:            number | null;
      T:            number | null;
      Start:        Date | null;
      End:          Date | null;
    }[];
  };
  PK: {
    Key: string;
    Constraint: string;
    'APU-ID': number;
  };
  Name: 'AAU-APU-Tasks-Gantt';
};

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
};

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
};

// APU-Tasks
export interface APUTasks {
  Row: {
    ID:    number;
    T:     number | null;
    Start: Date | null;
    End:   Date | null;
  };
  PK: {
    ID: number;
  };
  Name: 'APU-Tasks';
};

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
    ExpiredAt:    Date | null;
    P:            number;
    Q:            number;
    T:            number;
    Start:        Date | null;
    End:          Date | null;
  };
  PK: {
    ID: number;
  };
  Name: 'APU-Tasks-Gantt';
};

// APU-Import-Supplies
export interface APUImportSupplies {
  Row: {
    APUID:       number;
    SupplyID:    number | null;
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
};

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
};

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
    Key:        string;
    Constraint: string;
  };
  Name: 'APU-Assign';
}

// AEU
export interface AEU {
  Row: {
    ID:         number;
    ReportedAt: Date;
    APUID:      number;
    Q:          number | null;
    Start:      Date;
    End:        Date | null;
  };
  PK: {
    ID: number;
  };
  Name: 'AEU'
};

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
};

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
};

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
};

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
};

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
};

// FACAD-BuiltInCategories
export interface FACADBuiltInCategories {
  Row: {
    BuiltInCategory: string;
  };
  PK: {
    BuiltInCategory: string;
  };
  Name: 'FACAD-BuiltInCategories';
};

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
};

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
};