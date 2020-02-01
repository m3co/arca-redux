
import { State, Row, PK, AAU } from '../types';
type TRow = AAU["Row"];

export function Update(state: State, row: Row, pk?: PK): TRow[] {
  const Row = row as TRow;
  const PK = pk || { Key: Row.Key };
  const keys = Object.keys(PK) as (keyof typeof PK)[];
  return state.Source["AAU"].Rows
    .map((row): TRow =>
      (keys.every((key): boolean => PK[key] === row[key])) ? Row : row);
}

export function Delete(state: State, row: Row, pk?: PK): TRow[] {
  const Row = row as TRow;
  const PK = pk || { Key: Row.Key };
  const keys = Object.keys(PK) as (keyof typeof PK)[];
  return state.Source["AAU"].Rows.filter((row): boolean =>
    (keys.every((key): boolean => PK[key] === row[key])) ? false : true);
}
