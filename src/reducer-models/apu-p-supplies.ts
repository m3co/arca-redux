
import { State, Row, PK, APUPSupplies } from '../types';
type TRow = APUPSupplies['Row'];

export function Update(state: State, row: Row, pk?: PK): { Rows: TRow[] } {
  const Row = row as TRow;
  const PK = pk || { SupplyID: Row.SupplyID, APUID: Row.APUID };
  const keys = Object.keys(PK) as (keyof typeof PK)[];
  return { Rows: state.Source['APU-P-Supplies'].Rows
    .map((row): TRow =>
      (keys.every((key): boolean => PK[key] === row[key])) ? Row : row) };
}

export function Delete(state: State, row: Row, pk?: PK): { Rows: TRow[] } {
  const Row = row as TRow;
  const PK = pk || { SupplyID: Row.SupplyID, APUID: Row.APUID };
  const keys = Object.keys(PK) as (keyof typeof PK)[];
  return { Rows: state.Source['APU-P-Supplies'].Rows
    .filter((row): boolean =>
      (keys.every((key): boolean => PK[key] === row[key])) ? false : true) };
}
