
import { State, Row, FACADpreCFTAAUKey, PK } from '../types';

export function Update(state: State, row: Row, pk?: PK): State {
  const Row = row as FACADpreCFTAAUKey["Row"];
  const PK = pk || {Type: Row.Type, Family: Row.Family, Key: Row.Key};
  const keys = Object.keys(PK) as (keyof typeof PK)[];
  return {
    ...state,
    Source: {
      ...state.Source,
      ["FACAD-preCFT-AAU-Key"]: {
        ...state.Source["FACAD-preCFT-AAU-Key"],
        Rows: state.Source["FACAD-preCFT-AAU-Key"].Rows
          .map((row): FACADpreCFTAAUKey["Row"] =>
            (keys.every((key): boolean => PK[key] === row[key])) ? Row : row)
      }
    }
  };
}