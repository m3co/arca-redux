
import { State, Row, PK, AAUAPUTasksGantt } from '../types';

export function Update(state: State, row: Row, pk?: PK): State {
  const Row = row as AAUAPUTasksGantt["Row"];
  const PK = pk || { Key: Row.Key, Constraint: Row.Constraint, 'APU-ID': Row["APU-ID"] };
  const keys = Object.keys(PK) as (keyof typeof PK)[];
  return {
    ...state,
    Source: {
      ...state.Source,
      ["AAU-APU-Tasks-Gantt"]: {
        ...state.Source["AAU-APU-Tasks-Gantt"],
        Rows: state.Source["AAU-APU-Tasks-Gantt"].Rows
          .map((row): AAUAPUTasksGantt["Row"] =>
            (keys.every((key): boolean => PK[key] === row[key])) ? Row : row)
      }
    }
  };
}

export function Delete(state: State, row: Row, pk?: PK): State {
  const Row = row as AAUAPUTasksGantt["Row"];
  const PK = pk || { Key: Row.Key, Constraint: Row.Constraint, 'APU-ID': Row["APU-ID"] };
  const keys = Object.keys(PK) as (keyof typeof PK)[];
  return {
    ...state,
    Source: {
      ...state.Source,
      ["AAU-APU-Tasks-Gantt"]: {
        ...state.Source["AAU-APU-Tasks-Gantt"],
        Rows: state.Source["AAU-APU-Tasks-Gantt"].Rows.filter((row): boolean =>
          (keys.every((key): boolean => PK[key] === row[key])) ? false : true)
      }
    }
  };
}
