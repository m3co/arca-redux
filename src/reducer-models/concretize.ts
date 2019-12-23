
import { State, Model, AAUConcretize } from '../types';

export function Update(state: State, row: Model["Row"]): State {
  const Row = row as AAUConcretize["Row"];
  const PK = { Key: Row.Key };
  const keys = Object.keys(PK) as (keyof typeof PK)[];
  return {
    ...state,
    Source: {
      ...state.Source,
      ["AAU-Concretize"]: {
        ...state.Source["AAU-Concretize"],
        Rows: state.Source["AAU-Concretize"].Rows
          .map((row): AAUConcretize["Row"] =>
            (keys.every((key): boolean => PK[key] === row[key])) ? Row : row)
      }
    }
  };
}

export function Delete(state: State, row: Model["Row"]): State {
  const Row = row as AAUConcretize["Row"];
  const PK = { Key: Row.Key };
  const keys = Object.keys(PK) as (keyof typeof PK)[];
  return {
    ...state,
    Source: {
      ...state.Source,
      ["AAU-Concretize"]: {
        ...state.Source["AAU-Concretize"],
        Rows: state.Source["AAU-Concretize"].Rows.filter((row): boolean =>
          (keys.every((key): boolean => PK[key] === row[key])) ? false : true)
      }
    }
  };
}
