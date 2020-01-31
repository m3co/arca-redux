
import { State, Row, PK, APUTasksGantt } from '../types';

export function Update(state: State, row: Row, pk?: PK): State {
  const Row = row as APUTasksGantt["Row"];
  const PK = pk || { ID: Row.ID };
  const keys = Object.keys(PK) as (keyof typeof PK)[];
  return {
    ...state,
    Source: {
      ...state.Source,
      ["APU-Tasks-Gantt"]: {
        ...state.Source["APU-Tasks-Gantt"],
        Rows: state.Source["APU-Tasks-Gantt"].Rows
          .map((row): APUTasksGantt["Row"] =>
            (keys.every((key): boolean => PK[key] === row[key])) ? Row : row)
      }
    }
  };
}

export function Delete(state: State, row: Row, pk?: PK): State {
  const Row = row as APUTasksGantt["Row"];
  const PK = { ID: Row.ID };
  const keys = Object.keys(PK) as (keyof typeof PK)[];
  return {
    ...state,
    Source: {
      ...state.Source,
      ["APU-Tasks-Gantt"]: {
        ...state.Source["APU-Tasks-Gantt"],
        Rows: state.Source["APU-Tasks-Gantt"].Rows.filter((row): boolean =>
          (keys.every((key): boolean => PK[key] === row[key])) ? false : true)
      }
    }
  };
}