
import { State, Row, PK, FACADCFTFiltersAAU } from '../types';

export function Update(state: State, row: Row, pk?: PK): State {
  const Row = row as FACADCFTFiltersAAU["Row"];
  const PK = pk || { ID: Row.ID };
  const keys = Object.keys(PK) as (keyof typeof PK)[];
  return {
    ...state,
    Source: {
      ...state.Source,
      ["FACAD-CFT-Filters-AAU"]: {
        ...state.Source["FACAD-CFT-Filters-AAU"],
        Rows: state.Source["FACAD-CFT-Filters-AAU"].Rows
          .map((row): FACADCFTFiltersAAU["Row"] =>
            (keys.every((key): boolean => PK[key] === row[key])) ? Row : row)
      }
    }
  };
}

export function Delete(state: State, row: Row): State {
  const Row = row as FACADCFTFiltersAAU["Row"];
  const PK = { ID: Row.ID };
  const keys = Object.keys(PK) as (keyof typeof PK)[];
  return {
    ...state,
    Source: {
      ...state.Source,
      ["FACAD-CFT-Filters-AAU"]: {
        ...state.Source["FACAD-CFT-Filters-AAU"],
        Rows: state.Source["FACAD-CFT-Filters-AAU"].Rows.filter((row): boolean =>
          (keys.every((key): boolean => PK[key] === row[key])) ? false : true)
      }
    }
  };
}
