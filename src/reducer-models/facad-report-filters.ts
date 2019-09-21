
import { State, Model, FACADReportFilters } from '../types';

export function Update(state: State, row: Model["Row"]): State {
  const Row = row as FACADReportFilters["Row"];
  const PK = { ID: Row.ID };
  const keys = Object.keys(PK) as (keyof typeof PK)[];
  return {
    ...state,
    Source: {
      ...state.Source,
      ["FACAD-ReportFilters"]: {
        ...state.Source["FACAD-ReportFilters"],
        Rows: state.Source["FACAD-ReportFilters"].Rows
          .map((row): FACADReportFilters["Row"] =>
            (keys.every((key): boolean => PK[key] === row[key])) ? Row : row)
      }
    }
  };
}

export function Delete(state: State, row: Model["Row"]): State {
  const Row = row as FACADReportFilters["Row"];
  const PK = { ID: Row.ID };
  const keys = Object.keys(PK) as (keyof typeof PK)[];
  return {
    ...state,
    Source: {
      ...state.Source,
      ["FACAD-ReportFilters"]: {
        ...state.Source["FACAD-ReportFilters"],
        Rows: state.Source["FACAD-ReportFilters"].Rows.filter((row): boolean =>
          (keys.every((key): boolean => PK[key] === row[key])) ? false : true)
      }
    }
  };
}
