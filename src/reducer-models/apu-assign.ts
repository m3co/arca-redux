
import { State, Model, APUAssign } from '../types';

export function Update(state: State, row: Model["Row"]): State {
  const Row = row as APUAssign["Row"];
  const PK = { Key: Row.Key, Constraint: Row.Constraint, ID: Row.ID };
  const keys = Object.keys(PK) as (keyof typeof PK)[];
  return {
    ...state,
    Source: {
      ...state.Source,
      ["APU-Assign"]: {
        ...state.Source["APU-Assign"],
        Rows: state.Source["APU-Assign"].Rows
          .map((row): APUAssign["Row"] =>
            (keys.every((key): boolean => PK[key] === row[key])) ? Row : row)
      }
    }
  };
}

export function Delete(state: State, row: Model["Row"]): State {
  const Row = row as APUAssign["Row"];
  const PK = { Key: Row.Key, Constraint: Row.Constraint, ID: Row.ID };
  const keys = Object.keys(PK) as (keyof typeof PK)[];
  return {
    ...state,
    Source: {
      ...state.Source,
      ["APU-Assign"]: {
        ...state.Source["APU-Assign"],
        Rows: state.Source["APU-Assign"].Rows.filter((row): boolean =>
          (keys.every((key): boolean => PK[key] === row[key])) ? false : true)
      }
    }
  };
}
