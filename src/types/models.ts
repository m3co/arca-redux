// APU-Import-Supplies
export interface APUImportSupplies {
  Row: {
    APUID:       number;
    SupplyID:    number | null;
    P:           number;
    Description: string | null;
    Unit:        string | null;
    Type:        string | null;
    Estimated:   number | null;
  };
  PK: {
    APUID:    number;
    SupplyID: number | null;
  };
  Name: 'APU-Import-Supplies';
}
