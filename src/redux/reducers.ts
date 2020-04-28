import { ARCA_DATA } from './constant';
import { arcaDataType } from './types';

export const arcaDataReducer = (state = 'arcaData', action: arcaDataType): string => {
  switch (action.type) {
    case ARCA_DATA:
      return action.arcaData;
    default:
      return state;
  }
};
