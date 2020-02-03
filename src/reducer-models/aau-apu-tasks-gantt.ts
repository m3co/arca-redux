
import { State, Row, PK, AAUAPUTasksGantt } from '../types';
type TRow = AAUAPUTasksGantt["Row"];
type TAgg = AAUAPUTasksGantt["Agg"];

export function Select(state: State, rows: Row[]): TAgg[] {
  const Rows = rows as TRow[];
  return Rows.reduce((acc, row) => {
    let curr = acc.find(agg =>
      (agg.Key === row.Key) && (agg.Constraint === row.Constraint));
    if (curr) {
      curr.APU.push({
        ID:           row['APU-ID'],
        ContractorID: row.ContractorID,
        Status:       row.Status,
        Frozen:       row.Frozen,
        ExpiredAt:    row.ExpiredAt,
        Description:  row['APU-Description'],
        Unit:         row['APU-Unit'],
        P:            row['APU-P'],
        Q:            row['APU-Q'],
        T:            row['APU-T'],
        Start:        row['APU-Start'],
        End:          row['APU-End'],
      });
    } else {
      acc.push({
        Project:     row.Project,
        Key:         row.Key,
        Constraint:  row.Constraint,
        Description: row['AAU-Description'],
        Unit:        row['AAU-Description'],
        P:           row['AAU-P'],
        Q:           row['AAU-Q'],
        T:           row['AAU-T'],
        Start:       row['AAU-Start'],
        End:         row['AAU-End'],
        APU: [{
          ID:           row['APU-ID'],
          ContractorID: row.ContractorID,
          Status:       row.Status,
          Frozen:       row.Frozen,
          ExpiredAt:    row.ExpiredAt,
          Description:  row['APU-Description'],
          Unit:         row['APU-Unit'],
          P:            row['APU-P'],
          Q:            row['APU-Q'],
          T:            row['APU-T'],
          Start:        row['APU-Start'],
          End:          row['APU-End'],
        }]
      });
    }
    return acc;
  }, [] as TAgg[]);
}

export function Update(state: State, row: Row, pk?: PK): TRow[] {
  const Row = row as TRow;
  const PK = pk || { Key: Row.Key, Constraint: Row.Constraint, 'APU-ID': Row["APU-ID"] };
  const keys = Object.keys(PK) as (keyof typeof PK)[];
  return state.Source["AAU-APU-Tasks-Gantt"].Rows
    .map((row): TRow =>
      (keys.every((key): boolean => PK[key] === row[key])) ? Row : row);
}

export function Delete(state: State, row: Row, pk?: PK): TRow[] {
  const Row = row as TRow;
  const PK = pk || { Key: Row.Key, Constraint: Row.Constraint, 'APU-ID': Row["APU-ID"] };
  const keys = Object.keys(PK) as (keyof typeof PK)[];
  return state.Source["AAU-APU-Tasks-Gantt"].Rows.filter((row): boolean =>
    (keys.every((key): boolean => PK[key] === row[key])) ? false : true);
}
