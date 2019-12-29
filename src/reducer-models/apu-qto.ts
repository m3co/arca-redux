
import { State, Row, PK, APUQTO } from '../types';

export function Update(state: State, row: Row, pk?: PK): State {
  const Row = row as APUQTO["Row"];
  const PK = pk || { Withdrawn: Row.Withdrawn, ID: Row.ID };
  const keys = Object.keys(PK) as (keyof typeof PK)[];
  return {
    ...state,
    Source: {
      ...state.Source,
      ["APU-QTO"]: {
        ...state.Source["APU-QTO"],
        Rows: state.Source["APU-QTO"].Rows
          .map((row): APUQTO["Row"] =>
            (keys.every((key): boolean => PK[key] === row[key])) ? Row : row)
      }
    }
  };
}

export function Delete(state: State, row: Row, pk?: PK): State {
  const Row = row as APUQTO["Row"];
  const PK = { Withdrawn: Row.Withdrawn, ID: Row.ID };
  const keys = Object.keys(PK) as (keyof typeof PK)[];
  return {
    ...state,
    Source: {
      ...state.Source,
      ["APU-QTO"]: {
        ...state.Source["APU-QTO"],
        Rows: state.Source["APU-QTO"].Rows.filter((row): boolean =>
          (keys.every((key): boolean => PK[key] === row[key])) ? false : true)
      }
    }
  };
}
