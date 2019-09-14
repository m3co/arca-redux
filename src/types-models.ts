
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
    Constraint: string;
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
    Constraint: string;
    Start: string;
    End: string;
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
    Category: string;
    Family: string;
    Name: string;
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

// FACAD-preCFT
export interface FACADpreCFT {
  Row: {
    ID: number;
    Category: string;
    Family: string;
    Name: string;
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
