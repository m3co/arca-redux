import { APUImportSuppliesInApp } from '../../types/models';

type TRow = APUImportSuppliesInApp['Row'];
type TAgg = APUImportSuppliesInApp['Agg'];

export const createAPUImportSuppliesInAppAggs = (Rows: TRow[]) => Rows.reduce((acc, row) => {
  let curr = acc.find(agg => agg.APUID === row.APUID);
  if (curr) {
    row.SupplyID &&
    curr.Supplies.push({
      SupplyID:     row.SupplyID,
      OwnerID:      row.OwnerID,
      P:            row.P,
      Description:  row['MetaSupply-Description'],
      Unit:         row['MetaSupply-Unit'],
      Type:         row.Type,
      Estimated:    row['MetaSupply-Estimated'],
      ContractorID: row['MetaSupply-ContractorID'],
    });
  } else {
    const supplies = row.SupplyID 
      ? [{
        SupplyID:     row.SupplyID,
        OwnerID:      row.OwnerID,
        P:            row.P,
        Description:  row['MetaSupply-Description'],
        Unit:         row['MetaSupply-Unit'],
        Type:         row.Type,
        Estimated:    row['MetaSupply-Estimated'],
        ContractorID: row['MetaSupply-ContractorID'],
      }]
      : []; 

    acc.push({
      APUID:        row['APUID'],
      ContractorID: row['APU-ContractorID'],
      Key:          row.Key,
      Constraint:   row.Constraint,
      Description:  row['APU-Description'],
      Unit:         row['APU-Unit'],
      P:            row['APU-P'],
      Estimated:    row['APU-Estimated'],
      Price:        row['APU-Price'],
      Supplies:     [...supplies]
    });
  }
  return acc;
}, [] as TAgg[]);
