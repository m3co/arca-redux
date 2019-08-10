
import { State, Model, FACADSchedules } from '../types';

export function Update(state: State, row: Model["Row"]): State {
  const Row = row as FACADSchedules["Row"];
  const PK = { ID: Row.ID };
  const keys = Object.keys(PK) as (keyof typeof PK)[];
  return {
    ...state,
    Source: {
      ...state.Source,
      ["FACAD-Schedules"]: {
        ...state.Source["FACAD-Schedules"],
        Rows: state.Source["FACAD-Schedules"].Rows
          .map((row): FACADSchedules["Row"] =>
            (keys.every((key): boolean => PK[key] === row[key])) ? Row : row)
      }
    }
  };
}

export function Delete(state: State, row: Model["Row"]): State {
  const Row = row as FACADSchedules["Row"];
  const PK = { ID: Row.ID };
  const keys = Object.keys(PK) as (keyof typeof PK)[];
  return {
    ...state,
    Source: {
      ...state.Source,
      ["FACAD-Schedules"]: {
        ...state.Source["FACAD-Schedules"],
        Rows: state.Source["FACAD-Schedules"].Rows.filter((row): boolean =>
          (keys.every((key): boolean => PK[key] === row[key])) ? false : true)
      }
    }
  };
}
