
import { State, Row, PK, AAUAPUTasksGantt } from '../types';
type TRow = AAUAPUTasksGantt["Row"];

export function Update(state: State, row: Row, pk?: PK): TRow[] {
  const Row = row as TRow;
  const PK = pk || { Key: Row.Key, Constraint: Row.Constraint, 'APU-ID': Row["APU-ID"] };
  const keys = Object.keys(PK) as (keyof typeof PK)[];
  return state.Source["AAU-APU-Tasks-Gantt"].Rows
    .map((row): TRow =>
      (keys.every((key): boolean => PK[key] === row[key])) ? Row : row);
}

export function Delete(state: State, row: Row, pk?: PK): TRow[] {
  const Row = row as TRow;
  const PK = pk || { Key: Row.Key, Constraint: Row.Constraint, 'APU-ID': Row["APU-ID"] };
  const keys = Object.keys(PK) as (keyof typeof PK)[];
  return state.Source["AAU-APU-Tasks-Gantt"].Rows.filter((row): boolean =>
    (keys.every((key): boolean => PK[key] === row[key])) ? false : true);
}
