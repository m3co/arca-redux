
import { State, Model, BudgetAAUvsGeneral } from '../types';

export function Update(state: State, row: Model["Row"]): State {
  const Row = row as BudgetAAUvsGeneral["Row"];
  const PK = { Key: Row.Key };
  const keys = Object.keys(PK) as (keyof typeof PK)[];
  return {
    ...state,
    Source: {
      ...state.Source,
      ["Budget-AAU-vs-General"]: {
        ...state.Source["Budget-AAU-vs-General"],
        Rows: state.Source["Budget-AAU-vs-General"].Rows
          .map((row): BudgetAAUvsGeneral["Row"] =>
            (keys.every((key): boolean => PK[key] === row[key])) ? Row : row)
      }
    }
  };
}

export function Delete(state: State, row: Model["Row"]): State {
  const Row = row as BudgetAAUvsGeneral["Row"];
  const PK = { Key: Row.Key };
  const keys = Object.keys(PK) as (keyof typeof PK)[];
  return {
    ...state,
    Source: {
      ...state.Source,
      ["Budget-AAU-vs-General"]: {
        ...state.Source["Budget-AAU-vs-General"],
        Rows: state.Source["Budget-AAU-vs-General"].Rows.filter((row): boolean =>
          (keys.every((key): boolean => PK[key] === row[key])) ? false : true)
      }
    }
  };
}
