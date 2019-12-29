
import { State, Row, PK, AAUTasksGantt } from '../types';

export function Update(state: State, row: Row, pk?: PK): State {
  const Row = row as AAUTasksGantt["Row"];
  const PK = pk || { Constraint: Row.Constraint, Key: Row.Key };
  const keys = Object.keys(PK) as (keyof typeof PK)[];
  return {
    ...state,
    Source: {
      ...state.Source,
      ["AAU-Tasks-Gantt"]: {
        ...state.Source["AAU-Tasks-Gantt"],
        Rows: state.Source["AAU-Tasks-Gantt"].Rows
          .map((row): AAUTasksGantt["Row"] =>
            (keys.every((key): boolean => PK[key] === row[key])) ? Row : row)
      }
    }
  };
}

export function Delete(state: State, row: Row): State {
  const Row = row as AAUTasksGantt["Row"];
  const PK = { Constraint: Row.Constraint, Key: Row.Key };
  const keys = Object.keys(PK) as (keyof typeof PK)[];
  return {
    ...state,
    Source: {
      ...state.Source,
      ["AAU-Tasks-Gantt"]: {
        ...state.Source["AAU-Tasks-Gantt"],
        Rows: state.Source["AAU-Tasks-Gantt"].Rows.filter((row): boolean =>
          (keys.every((key): boolean => PK[key] === row[key])) ? false : true)
      }
    }
  };
}
