
import { State, Row, PK, Contractors } from '../types';

export function Update(state: State, row: Row, pk?: PK): Contractors["Row"][] {
  const Row = row as Contractors["Row"];
  const PK = pk || { ID: Row.ID };
  const keys = Object.keys(PK) as (keyof typeof PK)[];
  return state.Source["Contractors"].Rows
    .map((row): Contractors["Row"] =>
      (keys.every((key): boolean => PK[key] === row[key])) ? Row : row);
}

export function Delete(state: State, row: Row, pk?: PK): Contractors["Row"][] {
  const Row = row as Contractors["Row"];
  const PK = pk || { ID: Row.ID };
  const keys = Object.keys(PK) as (keyof typeof PK)[];
  return state.Source["Contractors"].Rows.filter((row): boolean =>
    (keys.every((key): boolean => PK[key] === row[key])) ? false : true);
}
