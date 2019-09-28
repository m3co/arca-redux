
import { State, Model, Concretize } from '../types';

export function Update(state: State, row: Model["Row"]): State {
  const Row = row as Concretize["Row"];
  const PK = { Key: Row.Key };
  const keys = Object.keys(PK) as (keyof typeof PK)[];
  return {
    ...state,
    Source: {
      ...state.Source,
      ["Concretize"]: {
        ...state.Source["Concretize"],
        Rows: state.Source["Concretize"].Rows
          .map((row): Concretize["Row"] =>
            (keys.every((key): boolean => PK[key] === row[key])) ? Row : row)
      }
    }
  };
}

export function Delete(state: State, row: Model["Row"]): State {
  const Row = row as Concretize["Row"];
  const PK = { Key: Row.Key };
  const keys = Object.keys(PK) as (keyof typeof PK)[];
  return {
    ...state,
    Source: {
      ...state.Source,
      ["Concretize"]: {
        ...state.Source["Concretize"],
        Rows: state.Source["Concretize"].Rows.filter((row): boolean =>
          (keys.every((key): boolean => PK[key] === row[key])) ? false : true)
      }
    }
  };
}
