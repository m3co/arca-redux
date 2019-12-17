
import { State, Model, FACADCFTAAU } from '../types';

export function Update(state: State, row: Model["Row"]): State {
  const Row = row as FACADCFTAAU["Row"];
  const PK = { ID: Row.ID };
  const keys = Object.keys(PK) as (keyof typeof PK)[];
  return {
    ...state,
    Source: {
      ...state.Source,
      ["FACAD-CFT-AAU"]: {
        ...state.Source["FACAD-CFT-AAU"],
        Rows: state.Source["FACAD-CFT-AAU"].Rows
          .map((row): FACADCFTAAU["Row"] =>
            (keys.every((key): boolean => PK[key] === row[key])) ? Row : row)
      }
    }
  };
}

export function Delete(state: State, row: Model["Row"]): State {
  const Row = row as FACADCFTAAU["Row"];
  const PK = { ID: Row.ID };
  const keys = Object.keys(PK) as (keyof typeof PK)[];
  return {
    ...state,
    Source: {
      ...state.Source,
      ["FACAD-CFT-AAU"]: {
        ...state.Source["FACAD-CFT-AAU"],
        Rows: state.Source["FACAD-CFT-AAU"].Rows.filter((row): boolean =>
          (keys.every((key): boolean => PK[key] === row[key])) ? false : true)
      }
    }
  };
}
