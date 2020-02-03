
import { Action, State } from './types';
import { reducers } from './reducer-models';
import { AAUAPUTasksGantt } from './types-models';

export const initialState: State = {
  Connected: false,
  Source: {
    'Projects': {
      Rows: [],
      Requests: [],
    },
    'Contractors': {
      Rows: [],
      Requests: [],
    },
    'FACAD-Reports': {
      Rows: [],
      Requests: [],
    },
    'FACAD-Report-Filters': {
      Rows: [],
      Requests: [],
    },
    'FACAD-CFT-AAU': {
      Rows: [],
      Requests: [],
    },
    'FACAD-CFT-Filters-AAU': {
      Rows: [],
      Requests: [],
    },
    'FACAD-preCFT-AAU': {
      Rows: [],
      Requests: [],
    },
    'FACAD-preCFT-AAU-Key': {
      Rows: [],
      Requests: [],
    },
    'FACAD-ParamsBIC': {
      Rows: [],
      Requests: [],
    },
    'FACAD-BuiltInCategories': {
      Rows: [],
      Requests: [],
    },
    'AAU': {
      Rows: [],
      Requests: [],
    },
    'AAU-QTO': {
      Rows: [],
      Requests: [],
    },
    'AAU-Tasks-Gantt': {
      Rows: [],
      Requests: [],
    },
    'AAU-APU-Tasks-Gantt': {
      Rows: [],
      Aggs: [],
      Requests: [],
    },
    'AAU-Concretize': {
      Rows: [],
      Requests: [],
    },
    'APU': {
      Rows: [],
      Requests: [],
    },
    'APU-Import-Supplies': {
      Rows: [],
      Requests: [],
    },
    'APU-MetaSupplies': {
      Rows: [],
      Requests: [],
    },
    'APU-P-Supplies': {
      Rows: [],
      Requests: [],
    },
    'APU-QTO': {
      Rows: [],
      Requests: [],
    },
    'APU-Tasks': {
      Rows: [],
      Requests: [],
    },
    'APU-Tasks-Gantt': {
      Rows: [],
      Requests: [],
    },
    'APU-Assign': {
      Rows: [],
      Requests: [],
    },
    'AEU': {
      Rows: [],
      Requests: [],
    },
    'Budget-AAU': {
      Rows: [],
      Requests: [],
    },
    'Budget-AAU-vs-General': {
      Rows: [],
      Requests: [],
    },
    'Tasks-Month-CashFlow-AAU': {
      Rows: [],
      Requests: [],
    }
  },
};

export const reducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case 'Connect':
      return {
        ...state,
        Connected: true
      };
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
    case 'GetInfo':
      return {
        ...state,
        Source: {
          ...state.Source,
          [action.Source]: {
            ...state.Source[action.Source],
            Info: action.Result,
          }
        }
      };
    case 'Select':
      if (action.Source === 'AAU-APU-Tasks-Gantt') {
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
      }
      return {
        ...state,
        Source: {
          ...state.Source,
          [action.Source]: {
            ...state.Source[action.Source],
            Rows: action.Result,
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
            Requests: (action.Success) ?
              [...state.Source[action.Source].Requests].filter(
                (ID: string): boolean => ID !== action.ID) :
              [...state.Source[action.Source].Requests, action.ID],
          }
        }
      };
    case 'insert':
      if (action.Source === 'AAU-APU-Tasks-Gantt') {
        return {
          ...state,
          Source: {
            ...state.Source,
            [action.Source]: {
              ...state.Source[action.Source],
              ...reducers[action.Source].Insert(state, action.Row, action.PK),
            }
          }
        };
      }
      return {
        ...state,
        Source: {
          ...state.Source,
          [action.Source]: {
            ...state.Source[action.Source],
            Rows: [action.Row, ...state.Source[action.Source].Rows]
          }
        }
      };
    case 'update':
      if (action.Source === 'AAU-APU-Tasks-Gantt') {
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
      }
      return {
        ...state,
        Source: {
          ...state.Source,
          [action.Source]: {
            ...state.Source[action.Source],
            Rows: reducers[action.Source].Update(state, action.Row, action.PK)
          }
        }
      };
    case 'delete':
      if (action.Source === 'AAU-APU-Tasks-Gantt') {
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
      }
      return {
        ...state,
        Source: {
          ...state.Source,
          [action.Source]: {
            ...state.Source[action.Source],
            Rows: reducers[action.Source].Delete(state, action.Row, action.PK)
          }
        }
      };
    default:
      return state;
  }
};
