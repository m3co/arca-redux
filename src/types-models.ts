
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
    Key: string;
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
    Key: string;
  };
};

// Tasks-Month-CashFlow-AAU
export interface TasksMonthCashFlowAAU {
  Row: {
    Project: number | null;
    Key: string;
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
    Key: string;
  };
};

// Concretize
export interface Concretize {
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
    Key: string;
    Project: number | null;
  };
};

// AAU-QTO
export interface AAUQTO {
  Row: {
    Key: string;
    Constraint: string;
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
    Constraint: string;
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
export interface FACADCFT {
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
export interface FACADCFTFilters {
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
export interface FACADpreCFT {
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
