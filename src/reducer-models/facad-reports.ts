
import { State, Model, FACADReports } from '../types';

export function Update(state: State, row: Model["Row"]): State {
  const Row = row as FACADReports["Row"];
  const PK = { ID: Row.ID };
  const keys = Object.keys(PK) as (keyof typeof PK)[];
  return {
    ...state,
    Source: {
      ...state.Source,
      ["FACAD-Reports"]: {
        ...state.Source["FACAD-Reports"],
        Rows: state.Source["FACAD-Reports"].Rows
          .map((row): FACADReports["Row"] =>
            (keys.every((key): boolean => PK[key] === row[key])) ? Row : row)
      }
    }
  };
}

export function Delete(state: State, row: Model["Row"]): State {
  const Row = row as FACADReports["Row"];
  const PK = { ID: Row.ID };
  const keys = Object.keys(PK) as (keyof typeof PK)[];
  return {
    ...state,
    Source: {
      ...state.Source,
      ["FACAD-Reports"]: {
        ...state.Source["FACAD-Reports"],
        Rows: state.Source["FACAD-Reports"].Rows.filter((row): boolean =>
          (keys.every((key): boolean => PK[key] === row[key])) ? false : true)
      }
    }
  };
}
