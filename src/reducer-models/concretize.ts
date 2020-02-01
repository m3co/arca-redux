
import { State, Row, PK, AAUConcretize } from '../types';
type TRow = AAUConcretize["Row"];

export function Update(state: State, row: Row, pk?: PK): TRow[] {
  const Row = row as TRow;
  const PK = pk || { Key: Row.Key };
  const keys = Object.keys(PK) as (keyof typeof PK)[];
  return state.Source["AAU-Concretize"].Rows
    .map((row): TRow =>
      (keys.every((key): boolean => PK[key] === row[key])) ? Row : row);
}

export function Delete(state: State, row: Row, pk?: PK): TRow[] {
  const Row = row as TRow;
  const PK = pk || { Key: Row.Key };
  const keys = Object.keys(PK) as (keyof typeof PK)[];
  return state.Source["AAU-Concretize"].Rows.filter((row): boolean =>
    (keys.every((key): boolean => PK[key] === row[key])) ? false : true);
}
