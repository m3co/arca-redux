
import { State, Row, FACADpreCFTAAUKey, PK } from '../types';
type TRow = FACADpreCFTAAUKey["Row"];

export function Update(state: State, row: Row, pk?: PK): { Rows: TRow[] } {
  const Row = row as TRow;
  const PK = pk || {Type: Row.Type, Family: Row.Family, Key: Row.Key};
  const keys = Object.keys(PK) as (keyof typeof PK)[];
  return { Rows: state.Source["FACAD-preCFT-AAU-Key"].Rows
    .map((row): TRow =>
      (keys.every((key): boolean => PK[key] === row[key])) ? Row : row) };
}