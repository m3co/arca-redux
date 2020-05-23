import { State } from '../types/state';
import { Action } from '../types/actions';
import { reducers } from './reducer-models';

export const initialState: State = {
  Source: {
    'Projects': [],
    'Contractors': [],
    'FACAD-Reports': [],
    'FACAD-Report-Filters': [],
    'FACAD-CFT-AAU': [],
    'FACAD-CFT-Filters-AAU': [],
    'FACAD-preCFT-AAU': [],
    'FACAD-preCFT-AAU-Key': [],
    'FACAD-ParamsBIC': [],
    'FACAD-BuiltInCategories': [],
    'AAU': [],
    'AAU-QTO': [],
    'AAU-Tasks-Gantt': [],
    'AAU-APU-Tasks-Gantt': [],
    'AAU-APU-AEU-Tasks-Gantt': [],
    'AAU-Concretize': [],
    'AAU-APU-in-App': [],
    'APU': [],
    'APU-Import-Supplies': [],
    'APU-Import-Supplies-in-App': [],
    'APU-MetaSupplies': [],
    'APU-P-Supplies': [],
    'APU-QTO': [],
    'APU-Tasks': [],
    'APU-Tasks-Gantt': [],
    'APU-Assign': [],
    'AEU': [],
    'Budget-AAU': [],
    'Budget-AAU-vs-General': [],
    'Tasks-Month-CashFlow-AAU': [],
  },
};

export const arcaReducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case 'Subscribe':
      return {
        ...state,
        Source: {
          ...state.Source,
          [action.Source]: {
            ...state.Source[action.Source],
            Subscribed: action.Subscribed,
          }
        }
      };
    case 'Select':
      return  {
        ...state,
        Source: {
          ...state.Source,
          [action.Source]: {
            ...state.Source[action.Source],
            ...reducers[action.Source].Select(state, action.Result),
          }
        }
      };
    case 'Insert':
    case 'Delete':
    case 'Update':
      return {
        ...state,
        Source: {
          ...state.Source,
          [action.Source]: {
            ...state.Source[action.Source],
          }
        }
      };
    case 'insert':
      return {
        ...state,
        Source: {
          ...state.Source,
          [action.Source]: {
            ...state.Source[action.Source],
            ...reducers[action.Source].Insert(state, state.Source[action.Source].Rows, action.Row, action.PK),
          }
        }
      };
    case 'update':
      return {
        ...state,
        Source: {
          ...state.Source,
          [action.Source]: {
            ...state.Source[action.Source],
            ...reducers[action.Source].Update(state, action.Row, action.PK),
          }
        }
      };
    case 'delete':
      return {
        ...state,
        Source: {
          ...state.Source,
          [action.Source]: {
            ...state.Source[action.Source],
            ...reducers[action.Source].Delete(state, action.Row, action.PK),
          }
        }
      };
    default:
      return state;
  }
};
