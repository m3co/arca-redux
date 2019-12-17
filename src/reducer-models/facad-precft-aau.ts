
import { State, Model, FACADpreCFT } from '../types';

export function Update(state: State, row: Model["Row"]): State {
  const Row = row as FACADpreCFT["Row"];
  const PK = { ID: Row.ID };
  const keys = Object.keys(PK) as (keyof typeof PK)[];
  return {
    ...state,
    Source: {
      ...state.Source,
      ["FACAD-preCFT-AAU"]: {
        ...state.Source["FACAD-preCFT-AAU"],
        Rows: state.Source["FACAD-preCFT-AAU"].Rows
          .map((row): FACADpreCFT["Row"] =>
            (keys.every((key): boolean => PK[key] === row[key])) ? Row : row)
      }
    }
  };
}

export function Delete(state: State, row: Model["Row"]): State {
  const Row = row as FACADpreCFT["Row"];
  const PK = { ID: Row.ID };
  const keys = Object.keys(PK) as (keyof typeof PK)[];
  return {
    ...state,
    Source: {
      ...state.Source,
      ["FACAD-preCFT-AAU"]: {
        ...state.Source["FACAD-preCFT-AAU"],
        Rows: state.Source["FACAD-preCFT-AAU"].Rows.filter((row): boolean =>
          (keys.every((key): boolean => PK[key] === row[key])) ? false : true)
      }
    }
  };
}
