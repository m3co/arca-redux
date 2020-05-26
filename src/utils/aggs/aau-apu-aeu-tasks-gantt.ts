import { AAUAPUAEUTasksGantt } from '../../types/models';

type TRow = AAUAPUAEUTasksGantt['Row'];
type TAgg = AAUAPUAEUTasksGantt['Agg'];

export const createAAUAPUAEUTasksGanttAggs = (Rows: TRow[]) => Rows.reduce((acc, row) => {
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
