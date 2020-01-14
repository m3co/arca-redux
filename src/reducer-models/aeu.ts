
import { State, Row, PK, AEU } from '../types';

export function Update(state: State, row: Row, pk?: PK): State {
  const Row = row as AEU["Row"];
  const PK = pk || { ID: Row.ID };
  const keys = Object.keys(PK) as (keyof typeof PK)[];
  return {
    ...state,
    Source: {
      ...state.Source,
      ["AEU"]: {
        ...state.Source["AEU"],
        Rows: state.Source["AEU"].Rows
          .map((row): AEU["Row"] =>
            (keys.every((key): boolean => PK[key] === row[key])) ? Row : row)
      }
    }
  };
}

export function Delete(state: State, row: Row, pk?: PK): State {
  const Row = row as AEU["Row"];
  const PK = { ID: Row.ID };
  const keys = Object.keys(PK) as (keyof typeof PK)[];
  return {
    ...state,
    Source: {
      ...state.Source,
      ["AEU"]: {
        ...state.Source["AEU"],
        Rows: state.Source["AEU"].Rows.filter((row): boolean =>
          (keys.every((key): boolean => PK[key] === row[key])) ? false : true)
      }
    }
  };
}
