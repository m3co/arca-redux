
import { State, Row, PK, AAUQTO } from '../types';

export function Update(state: State, row: Row, pk?: PK): State {
  const Row = row as AAUQTO["Row"];
  const PK = pk || { Constraint: Row.Constraint, Key: Row.Key };
  const keys = Object.keys(PK) as (keyof typeof PK)[];
  return {
    ...state,
    Source: {
      ...state.Source,
      ["AAU-QTO"]: {
        ...state.Source["AAU-QTO"],
        Rows: state.Source["AAU-QTO"].Rows
          .map((row): AAUQTO["Row"] =>
            (keys.every((key): boolean => PK[key] === row[key])) ? Row : row)
      }
    }
  };
}

export function Delete(state: State, row: Row): State {
  const Row = row as AAUQTO["Row"];
  const PK = { Constraint: Row.Constraint, Key: Row.Key };
  const keys = Object.keys(PK) as (keyof typeof PK)[];
  return {
    ...state,
    Source: {
      ...state.Source,
      ["AAU-QTO"]: {
        ...state.Source["AAU-QTO"],
        Rows: state.Source["AAU-QTO"].Rows.filter((row): boolean =>
          (keys.every((key): boolean => PK[key] === row[key])) ? false : true)
      }
    }
  };
}
