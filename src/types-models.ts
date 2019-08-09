
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
export interface FACADBuiltInCategories {
  Row: {
    BuiltInCategory: string;
  };
  PK: {
    BuiltInCategory: string;
  };
};
