
import { State, Model, FACADCFT } from '../types';

export function Update(state: State, row: Model["Row"]): State {
  const Row = row as FACADCFT["Row"];
  const PK = { ID: Row.ID };
  const keys = Object.keys(PK) as (keyof typeof PK)[];
  return {
    ...state,
    Source: {
      ...state.Source,
      ["FACAD-CFT"]: {
        ...state.Source["FACAD-CFT"],
        Rows: state.Source["FACAD-CFT"].Rows.map((row) =>
          (keys.every((key): boolean => PK[key] === row[key])) ? Row : row)
      }
    }
  };
}

export function Delete(state: State, row: Model["Row"]): State {
  const Row = row as FACADCFT["Row"];
  const PK = { ID: Row.ID };
  const keys = Object.keys(PK) as (keyof typeof PK)[];
  return {
    ...state,
    Source: {
      ...state.Source,
      ["FACAD-CFT"]: {
        ...state.Source["FACAD-CFT"],
        Rows: state.Source["FACAD-CFT"].Rows.filter((row): boolean =>
          (keys.every((key): boolean => PK[key] === row[key])) ? false : true)
      }
    }
  };
}
