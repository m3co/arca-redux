
import { ArcaState, ArcaActions, ArcaEntries, FACADParamsBIC, AAU } from './types';
import { initialState } from './'

export function Notify(state: ArcaState = initialState, action: ArcaActions): ArcaState {
  switch (action.type) {
    case 'Notify':
      switch (action.Method) {
        case 'insert':
        case 'delete':
        case 'update':
          switch (action.Context.Target) {
            case 'FACAD-ParamsBIC': {
              const Row = action.Row as FACADParamsBIC["Row"];
              let PK: FACADParamsBIC["PK"];
              let keys: (keyof typeof PK)[];
              PK = { ReportType: Row.ReportType, BuiltInCategory: Row.BuiltInCategory, Field: Row.Field };
              keys = Object.keys(PK) as (keyof typeof PK)[];
              return {...state,
                Sources: { ...state.Sources,
                  FACADParamsBIC: { ...state.Sources.FACADParamsBIC,
                    Rows: state.Sources.FACADParamsBIC.Rows.map((row) =>
                      (keys.every((key) => PK[key] === row[key])) ? Row : row)
                  }
                }
              };
            }
            case 'AAU': {
              const Row = action.Row as AAU["Row"];
              let PK: AAU["PK"];
              let keys: (keyof typeof PK)[];
              PK = { Key: Row.Key };
              keys = Object.keys(PK) as (keyof typeof PK)[];
              return {...state,
                Sources: { ...state.Sources,
                  [action.Context.Target]: { ...state.Sources[action.Context.Target],
                    Rows: state.Sources[action.Context.Target].Rows.map((row) =>
                      (keys.every((key) => PK[key] === row[key])) ? Row : row)
                  }
                }
              };
            }
          }
          return state;
        default:
          return state;
      }
    default:
      return state;
  }
}
