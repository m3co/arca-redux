
import { ArcaState, ArcaActions, ArcaEntries } from './types';
import { initialState } from './'

export function Notify(state: ArcaState = initialState, action: ArcaActions): ArcaState {
  switch (action.type) {
    case 'Notify':
      switch (action.Method) {
        case 'insert':
        case 'delete':
        case 'update':
          let PK: ArcaEntries["PK"];
          let keys: (keyof typeof PK)[];
          switch (action.Context.Target) {
            case 'AAU':
              PK = { Key: action.Row.Key };
              keys = Object.keys(PK) as (keyof typeof PK)[];
          }
          return {...state,
            Sources: { ...state.Sources,
              [action.Context.Target]: { ...state.Sources[action.Context.Target],
                Rows: state.Sources[action.Context.Target].Rows.map((row) =>
                  (keys.every((key) => PK[key] === row[key])) ? action.Row : row)
              }
            }
          };
        default:
          return state;
      }
    default:
      return state;
  }
}
