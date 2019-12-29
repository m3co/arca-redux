
import { State, Row, PK, FACADpreCFTAAU } from '../types';

export function Update(state: State, row: Row, pk?: PK): State {
  const Row = row as FACADpreCFTAAU["Row"];
  const PK = pk || { ID: Row.ID };
  const keys = Object.keys(PK) as (keyof typeof PK)[];
  return {
    ...state,
    Source: {
      ...state.Source,
      ["FACAD-preCFT-AAU"]: {
        ...state.Source["FACAD-preCFT-AAU"],
        Rows: state.Source["FACAD-preCFT-AAU"].Rows
          .map((row): FACADpreCFTAAU["Row"] =>
            (keys.every((key): boolean => PK[key] === row[key])) ? Row : row)
      }
    }
  };
}

export function Delete(state: State, row: Row): State {
  const Row = row as FACADpreCFTAAU["Row"];
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
