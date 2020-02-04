
import { State, Row, PK, APUImportSupplies } from '../types';
type TRow = APUImportSupplies['Row'];

export function Update(state: State, row: Row, pk?: PK): { Rows: TRow[] } {
  const Row = row as TRow;
  const PK = pk || { SupplyID: Row.SupplyID, APUID: Row.APUID };
  const keys = Object.keys(PK) as (keyof typeof PK)[];
  return { Rows: state.Source['APU-Import-Supplies'].Rows
    .map((row): TRow =>
      (keys.every((key): boolean => PK[key] === row[key])) ? Row : row) };
};

export function Delete(state: State, row: Row, pk?: PK): { Rows: TRow[] } {
  const Row = row as TRow;
  const PK = pk || { SupplyID: Row.SupplyID, APUID: Row.APUID };
  const keys = Object.keys(PK) as (keyof typeof PK)[];
  return { Rows: state.Source['APU-Import-Supplies'].Rows
    .filter((row): boolean =>
      (keys.every((key): boolean => PK[key] === row[key])) ? false : true) };
};
