
import { ArcaState, ArcaActions, ArcaEntries } from './types';
import { initialState } from './'

export function Notify(state: ArcaState = initialState, action: ArcaActions): ArcaState {
  switch (action.type) {
    case 'Notify':
      switch (action.Method) {
        case 'insert':
        case 'delete':
        case 'update':
        {
          let Rows: ArcaEntries["Row"][];
          if (action.Context.Target === 'AAU') {
            Rows = state.Sources.AAU.Rows.map((row: ArcaEntries["Row"]): ArcaEntries["Row"] =>
              (row.Key === action.Row.Key) ? action.Row : row);
          } else {
            return state;
          }
          return {...state,
            Sources: { ...state.Sources,
              [action.Context.Target]: { ...state.Sources[action.Context.Target],
                Rows: Rows
              }
            }
          };
        }
        default:
          return state;
      }
    default:
      return state;
  }
}
