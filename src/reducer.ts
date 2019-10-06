
import { Action, State } from './types';
import { reducers } from './reducer-models';

export const initialState: State = {
  Connected: false,
  Source: {
    'Projects': {
      Rows: [],
      Requests: [],
    },
    'FACAD-Reports': {
      Rows: [],
      Requests: [],
    },
    'FACAD-ReportFilters': {
      Rows: [],
      Requests: [],
    },
    'FACAD-CFT': {
      Rows: [],
      Requests: [],
    },
    'FACAD-CFTFilters': {
      Rows: [],
      Requests: [],
    },
    'FACAD-preCFT': {
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
    'Concretize': {
      Rows: [],
      Requests: [],
    },
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
      const { Row } = action;
      return {
        ...state,
        Source: {
          ...state.Source,
          [action.Source]: {
            ...state.Source[action.Source],
            Rows: [Row, ...state.Source[action.Source].Rows]
          }
        }
      };
    case 'update':
      return reducers[action.Source].Update(state, action.Row);
    case 'delete':
      return reducers[action.Source].Delete(state, action.Row);
    default:
      return state;
  }
};
