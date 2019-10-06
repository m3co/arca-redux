
import { State, Model, FACADCFTFilters } from '../types';

export function Update(state: State, row: Model["Row"]): State {
  const Row = row as FACADCFTFilters["Row"];
  const PK = { ID: Row.ID };
  const keys = Object.keys(PK) as (keyof typeof PK)[];
  return {
    ...state,
    Source: {
      ...state.Source,
      ["FACAD-CFTFilters"]: {
        ...state.Source["FACAD-CFTFilters"],
        Rows: state.Source["FACAD-CFTFilters"].Rows
          .map((row): FACADCFTFilters["Row"] =>
            (keys.every((key): boolean => PK[key] === row[key])) ? Row : row)
      }
    }
  };
}

export function Delete(state: State, row: Model["Row"]): State {
  const Row = row as FACADCFTFilters["Row"];
  const PK = { ID: Row.ID };
  const keys = Object.keys(PK) as (keyof typeof PK)[];
  return {
    ...state,
    Source: {
      ...state.Source,
      ["FACAD-CFTFilters"]: {
        ...state.Source["FACAD-CFTFilters"],
        Rows: state.Source["FACAD-CFTFilters"].Rows.filter((row): boolean =>
          (keys.every((key): boolean => PK[key] === row[key])) ? false : true)
      }
    }
  };
}
