
import { State, Model, APUPSupplies } from '../types';

export function Update(state: State, row: Model["Row"]): State {
  const Row = row as APUPSupplies["Row"];
  const PK = { SupplyID: Row.SupplyID, APUID: Row.APUID };
  const keys = Object.keys(PK) as (keyof typeof PK)[];
  return {
    ...state,
    Source: {
      ...state.Source,
      ["APU-P-Supplies"]: {
        ...state.Source["APU-P-Supplies"],
        Rows: state.Source["APU-P-Supplies"].Rows
          .map((row): APUPSupplies["Row"] =>
            (keys.every((key): boolean => PK[key] === row[key])) ? Row : row)
      }
    }
  };
}

export function Delete(state: State, row: Model["Row"]): State {
  const Row = row as APUPSupplies["Row"];
  const PK = { SupplyID: Row.SupplyID, APUID: Row.APUID };
  const keys = Object.keys(PK) as (keyof typeof PK)[];
  return {
    ...state,
    Source: {
      ...state.Source,
      ["APU-P-Supplies"]: {
        ...state.Source["APU-P-Supplies"],
        Rows: state.Source["APU-P-Supplies"].Rows.filter((row): boolean =>
          (keys.every((key): boolean => PK[key] === row[key])) ? false : true)
      }
    }
  };
}
