import { APUImportSupplies } from './models';

export type Row = APUImportSupplies['Row'];

export type PK = APUImportSupplies['PK'];

export type Model = APUImportSupplies;

export interface State {
  Source: {
    'APU-Import-Supplies': APUImportSupplies['Row'][];
  };
}
