
import { State, Row, PK, AAUAPUAEUTasksGantt } from '../types';
type TRow = AAUAPUAEUTasksGantt['Row'];
type TAgg = AAUAPUAEUTasksGantt['Agg'];

function ReduceRows(Rows: TRow[]) {
  return Rows.reduce((acc, row) => {
    let currAAU = acc.find(agg =>
      (agg.Key === row.Key) && (agg.Constraint === row.Constraint));
    if (currAAU) {
      let currAPU = currAAU.APU.find(agg =>
        agg.ID === row['APU-ID']);
      if (currAPU) {
        currAPU.AEU.push({
          ID:         row['AEU-ID'],
          ReportedAt: row.ReportedAt,
          Q:          row['AEU-Q'],
          Start:      row['AEU-Start'],
          End:        row['AEU-End'],
        });
      } else {
        currAAU.APU.push({
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
          AEU: [{
            ID:         row['AEU-ID'],
            ReportedAt: row.ReportedAt,
            Q:          row['AEU-Q'],
            Start:      row['AEU-Start'],
            End:        row['AEU-End'],
          }],
        });
      }
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
          AEU: [{
            ID:         row['AEU-ID'],
            ReportedAt: row.ReportedAt,
            Q:          row['AEU-Q'],
            Start:      row['AEU-Start'],
            End:        row['AEU-End'],
          }],
        }]
      });
    }
    return acc;
  }, [] as TAgg[]);
}

export function Select(_: State, rows: Row[]): { Rows: TRow[]; Aggs: TAgg[] } {
  const Rows = rows as TRow[];
  return {
    Rows: Rows,
    Aggs: ReduceRows(Rows)};
}

export function Insert(_: State, rows: Row[], row: Row, _pk?: PK): { Rows: TRow[]; Aggs: TAgg[] } {
  const Row = row as TRow;
  const Rows = [Row, ...rows as TRow[]];
  return {
    Rows: Rows,
    Aggs: ReduceRows(Rows),
  };
}

export function Update(state: State, row: Row, _?: PK): { Rows: TRow[]; Aggs: TAgg[] } {
  const Row = row as TRow;
  const PK = { Key: Row.Key, Constraint: Row.Constraint,
    'APU-ID': Row['APU-ID'], 'AEU-ID': Row['AEU-ID'] };
  const keys = Object.keys(PK) as (keyof typeof PK)[];
  const Rows = state.Source['AAU-APU-AEU-Tasks-Gantt'].Rows
    .map((row): TRow =>
      (keys.every((key): boolean => PK[key] === row[key])) ? Row : row);
  return {
    Rows: Rows,
    Aggs: ReduceRows(Rows),
  };
}

export function Delete(state: State, row: Row, _?: PK): { Rows: TRow[]; Aggs: TAgg[] } {
  const Row = row as TRow;
  const PK = { Key: Row.Key, Constraint: Row.Constraint,
    'APU-ID': Row['APU-ID'], 'AEU-ID': Row['AEU-ID'] };
  const keys = Object.keys(PK) as (keyof typeof PK)[];
  const Rows = state.Source['AAU-APU-AEU-Tasks-Gantt'].Rows
    .filter((row): boolean =>
      (keys.every((key): boolean => PK[key] === row[key])) ? false : true);
  return {
    Rows: Rows,
    Aggs: ReduceRows(Rows),
  };
}
