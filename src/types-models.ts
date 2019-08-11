
// Tasks-Gantt-AAU
export interface TasksGanttAAU {
  Row: {
    Key: string;
    Constraint: string;
    Start: Date;
    End: Date;
  };
  PK: {
    Key: string;
    Constraint: string;
  };
};

// FACAD-Schedules
export interface FACADSchedules {
  Row: {
    ID: number;
    BuiltInCategory: string;
    Name: string;
    PathName: string;
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
    FamilyType: string;
    Key: string;
    BuiltInCategory: string;
    ReportType: string;
    KeynoteField: string;
    ConstraintField: string;
    QuantityField: string;
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
