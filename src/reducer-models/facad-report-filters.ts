
import { State, Row, PK, FACADReportFilters } from '../types';
type TRow = FACADReportFilters["Row"];

export function Update(state: State, row: Row, pk?: PK): TRow[] {
  const Row = row as TRow;
  const PK = pk || { ID: Row.ID };
  const keys = Object.keys(PK) as (keyof typeof PK)[];
  return state.Source["FACAD-ReportFilters"].Rows
    .map((row): TRow =>
      (keys.every((key): boolean => PK[key] === row[key])) ? Row : row);
}

export function Delete(state: State, row: Row, pk?: PK): TRow[] {
  const Row = row as TRow;
  const PK = pk || { ID: Row.ID };
  const keys = Object.keys(PK) as (keyof typeof PK)[];
  return state.Source["FACAD-ReportFilters"].Rows.filter((row): boolean =>
    (keys.every((key): boolean => PK[key] === row[key])) ? false : true);
}
