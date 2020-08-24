
import { State, Row, PK, APUQTO } from '../types';
type TRow = APUQTO['Row'];

export function Update(state: State, row: Row, pk?: PK): { Rows: TRow[] } {
  const Row = row as TRow;
  const PK = pk || { Withdrawn: Row.Withdrawn, ID: Row.ID };
  const keys = Object.keys(PK) as (keyof typeof PK)[];
  return { Rows: state.Source['APU-QTO'].Rows
    .map((row): TRow =>
      (keys.every((key): boolean => PK[key] === row[key])) ? Row : row) };
}

export function Delete(state: State, row: Row, pk?: PK): { Rows: TRow[] } {
  const Row = row as TRow;
  const PK = pk || { Withdrawn: Row.Withdrawn, ID: Row.ID };
  const keys = Object.keys(PK) as (keyof typeof PK)[];
  return { Rows: state.Source['APU-QTO'].Rows
    .filter((row): boolean =>
      (keys.every((key): boolean => PK[key] === row[key])) ? false : true) };
}