
// Projects
export interface Projects {
  Row: {
    ID: number;
    Name: string;
    Description: string | null;
    Start: Date | null;
  };
  PK: {
    ID: number;
  };
};

// Contractors
export interface Contractors {
  Row: {
    ID: number;
    Name: string;
    Information: string | null;
  };
  PK: {
    ID: number;
  };
};

// Budget-AAU
export interface BudgetAAU {
  Row: {
    Project: number;
    Key: string | null;
    Description: string | null;
    Q: number | null;
    Unit: string | null;
    Estimated: number;
    TotalEstimated: number;
    SummEstimated: number;
    RateEstimated: number;
    P: number | null;
  };
  PK: {
    Key: string | null;
  };
};

// Budget-AAU-vs-General
export interface BudgetAAUvsGeneral {
  Row: {
    Project: number;
    Key: string | null;
    Description: string | null;
    Q: number | null;
    Unit: string | null;
    Estimated: number;
    TotalEstimated: number;
    SummEstimated: number;
    RateEstimated: number;
    P: number | null;
  };
  PK: {
    Key: string | null;
  };
};

// Tasks-Month-CashFlow-AAU
export interface TasksMonthCashFlowAAU {
  Row: {
    Project: number | null;
    Key: string;
    Description: string;
    Unit: string;
    TaskStart: Date | null;
    Start: Date | null;
    End: Date | null;
    TaskEnd: Date | null;
    Days: number | null;
    TotalDays: number | null;
    Cost: number | null;
    TotalCost: number | null;
  };
  PK: {
    Key: string;
  };
};

// AAU
export interface AAU {
  Row: {
    Key: string | null;
    Parent: string | null;
    Expand: boolean;
    Description: string | null;
    Unit: string | null;
    P: number | null;
    Estimated: number;
  };
  PK: {
    Key: string | null;
  };
};

// AAUConcretize
export interface AAUConcretize {
  Row: {
    Project: number | null;
    Concreted: boolean;
    Key: string | null;
    Parent: string | null;
    Expand: boolean;
    Description: string | null;
    Unit: string | null;
    P: number | null;
    Estimated: number;
  };
  PK: {
    Key: string | null;
    Project: number | null;
  };
};

// AAU-QTO
export interface AAUQTO {
  Row: {
    Key: string | null;
    Constraint: string | null;
    Q: number;
    CAD: boolean;
  };
  PK: {
    Key: string;
    Constraint: string;
  };
};

// AAU-Tasks-Gantt
export interface AAUTasksGantt {
  Row: {
    Key: string;
    Constraint: string | null;
    Description: string;
    Unit: string | null;
    Start: Date | null;
    End: Date | null;
  };
  PK: {
    Key: string;
    Constraint: string | null;
  };
};

// APU
export interface APU {
  Row: {
    ID:           number;
    Key:          string | null;
    Constraint:   string | null;
    ContractorID: number | null;
    Description:  string;
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
};

// APU-QTO
export interface APUQTO {
  Row: {
    ID:        number;
    Withdrawn: boolean;
    Q:         number;
  };
  PK: {
    ID: number;
    Withdrawn: boolean;
  };
};

// APU-Tasks
export interface APUTasks {
  Row: {
    ID:        number;
    Q:         number;
    Start: Date | null;
    End: Date | null;
  };
  PK: {
    ID: number;
  };
};

// APU-Import-Supplies
export interface APUImportSupplies {
  Row: {
    APUID:       number;
    SupplyID:    number | null;
    P:           number;
    Description: string | null;
    Unit:        string | null;
    Type:        string;
    Estimated:   number;
  };
  PK: {
    APUID:    number;
    SupplyID: number | null;
  };
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
  }
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
}

// APU-Assign
export interface APUAssign {
  Row: {
    Project:      number | null;
    Key:          string;
    Constraint:   string;
    Description:  string;
    Unit:         string | null;
    Status:       string | null;
    Frozen:       boolean;
    Estimated:    number | null;
    P:            number;
    Q:            number;
    ID:           number | null;
    ContractorID: number | null;
    Qres:         number;
  };
  PK: {
    ID:         number | null;
    Key:        string;
    Constraint: string;
  };
}

// AEU
export interface AEU {
  Row: {
    ID:         number;
    ReportedAt: Date;
    APUID:      number;
    Q:          number;
    Start:      Date;
    End:        Date | null;
  };
  PK: {
    ID: number;
  };
};

// FACAD-Reports
export interface FACADReports {
  Row: {
    ID: number;
    BuiltInCategory: string;
    ReportType: string;
    Name: string;
    PathName: string;
    Field1: string;
    Field2: string;
    Field3: string;
  };
  PK: {
    ID: number;
  };
};

// FACAD-ParamsBIC
export interface FACADParamsBIC {
  Row: {
    ReportType: string;
    BuiltInCategory: string;
    Field: string;
  };
  PK: {
    ReportType: string;
    BuiltInCategory: string;
    Field: string;
  };
};

// FACAD-CFT
export interface FACADCFTAAU {
  Row: {
    ID: number;
    Project: number | null;
    Family: string;
    Type: string;
    Key: string;
    BuiltInCategory: string;
    ReportType: string;
    KeynoteField: string | null;
    ConstraintField: string | null;
    QuantityField: string | null;
  };
  PK: {
    ID: number;
  };
};

// FACAD-CFTFilters
export interface FACADCFTFiltersAAU {
  Row: {
    ID: number;
    CFTID: number;
    Field: string;
    Comparator: string;
    Value: string;
    ValueType: string;
  };
  PK: {
    ID: number;
  };
};

// FACAD-preCFT
export interface FACADpreCFTAAU {
  Row: {
    ID: number;
    Family: string;
    Type: string;
    PathName: string;
  };
  PK: {
    ID: number;
  };
};

// FACAD-preCFT-AAU-Key
export interface FACADpreCFTAAUKey {
  Row: {
    Family: string;
    Type: string;
    Key: string | null;
  };
  PK: {
    Family: string;
    Type: string;
    Key: string | null;
  };
};

// FACAD-BuiltInCategories
export interface FACADBuiltInCategories {
  Row: {
    BuiltInCategory: string;
  };
  PK: {
    BuiltInCategory: string;
  };
};

// FACAD-ReportFilters
export interface FACADReportFilters {
  Row: {
    ID: number;
    ReportID: number;
    Field: string;
    Comparator: string;
    Value: string;
    ValueType: string;
  };
  PK: {
    ID: number;
  };
};
