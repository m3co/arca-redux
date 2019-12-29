
import { State, Row, PK, Projects } from '../types';

export function Update(state: State, row: Row, pk?: PK): State {
  const Row = row as Projects["Row"];
  const PK = pk || { ID: Row.ID };
  const keys = Object.keys(PK) as (keyof typeof PK)[];
  return {
    ...state,
    Source: {
      ...state.Source,
      ["Projects"]: {
        ...state.Source["Projects"],
        Rows: state.Source["Projects"].Rows
          .map((row): Projects["Row"] =>
            (keys.every((key): boolean => PK[key] === row[key])) ? Row : row)
      }
    }
  };
}

export function Delete(state: State, row: Row): State {
  const Row = row as Projects["Row"];
  const PK = { ID: Row.ID };
  const keys = Object.keys(PK) as (keyof typeof PK)[];
  return {
    ...state,
    Source: {
      ...state.Source,
      ["Projects"]: {
        ...state.Source["Projects"],
        Rows: state.Source["Projects"].Rows.filter((row): boolean =>
          (keys.every((key): boolean => PK[key] === row[key])) ? false : true)
      }
    }
  };
}
