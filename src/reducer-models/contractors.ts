
import { State, Model, Contractors } from '../types';

export function Update(state: State, row: Model["Row"]): State {
  const Row = row as Contractors["Row"];
  const PK = { ID: Row.ID };
  const keys = Object.keys(PK) as (keyof typeof PK)[];
  return {
    ...state,
    Source: {
      ...state.Source,
      ["Contractors"]: {
        ...state.Source["Contractors"],
        Rows: state.Source["Contractors"].Rows
          .map((row): Contractors["Row"] =>
            (keys.every((key): boolean => PK[key] === row[key])) ? Row : row)
      }
    }
  };
}

export function Delete(state: State, row: Model["Row"]): State {
  const Row = row as Contractors["Row"];
  const PK = { ID: Row.ID };
  const keys = Object.keys(PK) as (keyof typeof PK)[];
  return {
    ...state,
    Source: {
      ...state.Source,
      ["Contractors"]: {
        ...state.Source["Contractors"],
        Rows: state.Source["Contractors"].Rows.filter((row): boolean =>
          (keys.every((key): boolean => PK[key] === row[key])) ? false : true)
      }
    }
  };
}
