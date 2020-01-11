
import { State, Row, PK, APUTasks } from '../types';

export function Update(state: State, row: Row, pk?: PK): State {
  const Row = row as APUTasks["Row"];
  const PK = pk || { ID: Row.ID };
  const keys = Object.keys(PK) as (keyof typeof PK)[];
  return {
    ...state,
    Source: {
      ...state.Source,
      ["APU-Tasks"]: {
        ...state.Source["APU-Tasks"],
        Rows: state.Source["APU-Tasks"].Rows
          .map((row): APUTasks["Row"] =>
            (keys.every((key): boolean => PK[key] === row[key])) ? Row : row)
      }
    }
  };
}

export function Delete(state: State, row: Row, pk?: PK): State {
  const Row = row as APUTasks["Row"];
  const PK = { ID: Row.ID };
  const keys = Object.keys(PK) as (keyof typeof PK)[];
  return {
    ...state,
    Source: {
      ...state.Source,
      ["APU-Tasks"]: {
        ...state.Source["APU-Tasks"],
        Rows: state.Source["APU-Tasks"].Rows.filter((row): boolean =>
          (keys.every((key): boolean => PK[key] === row[key])) ? false : true)
      }
    }
  };
}
