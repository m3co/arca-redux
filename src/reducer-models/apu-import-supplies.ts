
import { State, Model, APUImportSupplies } from '../types';

export function Update(state: State, row: Model["Row"]): State {
  const Row = row as APUImportSupplies["Row"];
  const PK = { SupplyID: Row.SupplyID, APUID: Row.APUID };
  const keys = Object.keys(PK) as (keyof typeof PK)[];
  return {
    ...state,
    Source: {
      ...state.Source,
      ["APU-Import-Supplies"]: {
        ...state.Source["APU-Import-Supplies"],
        Rows: state.Source["APU-Import-Supplies"].Rows
          .map((row): APUImportSupplies["Row"] =>
            (keys.every((key): boolean => PK[key] === row[key])) ? Row : row)
      }
    }
  };
}

export function Delete(state: State, row: Model["Row"]): State {
  const Row = row as APUImportSupplies["Row"];
  const PK = { SupplyID: Row.SupplyID, APUID: Row.APUID };
  const keys = Object.keys(PK) as (keyof typeof PK)[];
  return {
    ...state,
    Source: {
      ...state.Source,
      ["APU-Import-Supplies"]: {
        ...state.Source["APU-Import-Supplies"],
        Rows: state.Source["APU-Import-Supplies"].Rows.filter((row): boolean =>
          (keys.every((key): boolean => PK[key] === row[key])) ? false : true)
      }
    }
  };
}
