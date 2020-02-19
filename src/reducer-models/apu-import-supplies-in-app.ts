
import { State, Row, PK, APUImportSuppliesInApp } from '../types';
type TRow = APUImportSuppliesInApp['Row'];
type TAgg = APUImportSuppliesInApp['Agg'];

function ReduceRows(Rows: TRow[]) {
  return Rows.reduce((acc, row) => {
    let curr = acc.find(agg => agg.APUID === row.APUID);
    if (curr) {
      curr.Supplies.push({
        SupplyID:     row.SupplyID,
        OwnerID:      row.OwnerID,
        P:            row.P,
        Description:  row["MetaSupply-Description"],
        Unit:         row["MetaSupply-Unit"],
        Type:         row.Type,
        Estimated:    row["MetaSupply-Estimated"],
        ContractorID: row["MetaSupply-ContractorID"],
      });
    } else {
      acc.push({
        APUID:        row['APUID'],
        ContractorID: row['APU-ContractorID'],
        Key:          row.Key,
        Constraint:   row.Constraint,
        Description:  row["APU-Description"],
        Unit:         row["APU-Unit"],
        P:            row["APU-P"],
        Estimated:    row["APU-Estimated"],
        Price:        row["APU-Price"],
        Supplies: [{
          SupplyID:     row.SupplyID,
          OwnerID:      row.OwnerID,
          P:            row.P,
          Description:  row["MetaSupply-Description"],
          Unit:         row["MetaSupply-Unit"],
          Type:         row.Type,
          Estimated:    row["MetaSupply-Estimated"],
          ContractorID: row["MetaSupply-ContractorID"],
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
  const PK = { APUID: Row.APUID, SupplyID: Row.SupplyID };
  const keys = Object.keys(PK) as (keyof typeof PK)[];
  const Rows = state.Source['APU-Import-Supplies-in-App'].Rows
    .map((row): TRow =>
      (keys.every((key): boolean => PK[key] === row[key])) ? Row : row);
  return {
    Rows: Rows,
    Aggs: ReduceRows(Rows),
  };
}

export function Delete(state: State, row: Row, _?: PK): { Rows: TRow[]; Aggs: TAgg[] } {
  const Row = row as TRow;
  const PK = { APUID: Row.APUID, SupplyID: Row.SupplyID };
  const keys = Object.keys(PK) as (keyof typeof PK)[];
  const Rows = state.Source['APU-Import-Supplies-in-App'].Rows
    .filter((row): boolean =>
      (keys.every((key): boolean => PK[key] === row[key])) ? false : true);
  return {
    Rows: Rows,
    Aggs: ReduceRows(Rows),
  };
}
