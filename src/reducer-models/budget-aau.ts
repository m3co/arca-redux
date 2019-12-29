
import { State, Row, PK, BudgetAAU } from '../types';

export function Update(state: State, row: Row, pk?: PK): State {
  const Row = row as BudgetAAU["Row"];
  const PK = pk || { Key: Row.Key };
  const keys = Object.keys(PK) as (keyof typeof PK)[];
  return {
    ...state,
    Source: {
      ...state.Source,
      ["Budget-AAU"]: {
        ...state.Source["Budget-AAU"],
        Rows: state.Source["Budget-AAU"].Rows
          .map((row): BudgetAAU["Row"] =>
            (keys.every((key): boolean => PK[key] === row[key])) ? Row : row)
      }
    }
  };
}

export function Delete(state: State, row: Row): State {
  const Row = row as BudgetAAU["Row"];
  const PK = { Key: Row.Key };
  const keys = Object.keys(PK) as (keyof typeof PK)[];
  return {
    ...state,
    Source: {
      ...state.Source,
      ["Budget-AAU"]: {
        ...state.Source["Budget-AAU"],
        Rows: state.Source["Budget-AAU"].Rows.filter((row): boolean =>
          (keys.every((key): boolean => PK[key] === row[key])) ? false : true)
      }
    }
  };
}
