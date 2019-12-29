
import { State, Row, PK, APU } from '../types';

export function Update(state: State, row: Row, pk?: PK): State {
  const Row = row as APU["Row"];
  const PK = pk || { ID: Row.ID };
  const keys = Object.keys(PK) as (keyof typeof PK)[];
  return {
    ...state,
    Source: {
      ...state.Source,
      ["APU"]: {
        ...state.Source["APU"],
        Rows: state.Source["APU"].Rows
          .map((row): APU["Row"] =>
            (keys.every((key): boolean => PK[key] === row[key])) ? Row : row)
      }
    }
  };
}

export function Delete(state: State, row: Row, pk?: PK): State {
  const Row = row as APU["Row"];
  const PK = { ID: Row.ID };
  const keys = Object.keys(PK) as (keyof typeof PK)[];
  return {
    ...state,
    Source: {
      ...state.Source,
      ["APU"]: {
        ...state.Source["APU"],
        Rows: state.Source["APU"].Rows.filter((row): boolean =>
          (keys.every((key): boolean => PK[key] === row[key])) ? false : true)
      }
    }
  };
}
