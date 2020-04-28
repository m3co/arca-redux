import { arcaDataType } from './types';
import { ARCA_DATA } from './constant';

export const setArcaData = (arcaData: string): arcaDataType => ({
  type: ARCA_DATA,
  arcaData,
});
