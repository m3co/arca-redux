
import { State, Model, APUMetaSupplies } from '../types';

export function Update(state: State, row: Model["Row"]): State {
  const Row = row as APUMetaSupplies["Row"];
  const PK = { ID: Row.ID };
  const keys = Object.keys(PK) as (keyof typeof PK)[];
  return {
    ...state,
    Source: {
      ...state.Source,
      ["APU-MetaSupplies"]: {
        ...state.Source["APU-MetaSupplies"],
        Rows: state.Source["APU-MetaSupplies"].Rows
          .map((row): APUMetaSupplies["Row"] =>
            (keys.every((key): boolean => PK[key] === row[key])) ? Row : row)
      }
    }
  };
}

export function Delete(state: State, row: Model["Row"]): State {
  const Row = row as APUMetaSupplies["Row"];
  const PK = { ID: Row.ID };
  const keys = Object.keys(PK) as (keyof typeof PK)[];
  return {
    ...state,
    Source: {
      ...state.Source,
      ["APU-MetaSupplies"]: {
        ...state.Source["APU-MetaSupplies"],
        Rows: state.Source["APU-MetaSupplies"].Rows.filter((row): boolean =>
          (keys.every((key): boolean => PK[key] === row[key])) ? false : true)
      }
    }
  };
}
