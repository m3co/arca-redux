
import { ArcaState, ArcaActions, FACADParamsBIC, FACADSchedules, AAU } from './types';
import { initialState } from '.'

export function Notify(state: ArcaState = initialState, action: ArcaActions): ArcaState {
  switch (action.type) {
    case 'Notify':
      switch (action.Method) {
        case 'insert':
          switch (action.Context.Target) {
            case 'AAU': {
              const Row = action.Row as AAU["Row"];
              return {...state,
                Sources: { ...state.Sources,
                  AAU: { ...state.Sources.AAU,
                    Rows: [...state.Sources.AAU.Rows, Row]
                  }
                }
              };
            }
            case 'FACAD-ParamsBIC': {
              const Row = action.Row as FACADParamsBIC["Row"];
              return {...state,
                Sources: { ...state.Sources,
                  FACADParamsBIC: { ...state.Sources.FACADParamsBIC,
                    Rows: [...state.Sources.FACADParamsBIC.Rows, Row]
                  }
                }
              };
            }
            case 'FACAD-Schedules': {
              const Row = action.Row as FACADSchedules["Row"];
              return {...state,
                Sources: { ...state.Sources,
                  FACADSchedules: { ...state.Sources.FACADSchedules,
                    Rows: [...state.Sources.FACADSchedules.Rows, Row]
                  }
                }
              };
            }
          }
          return state;
        case 'delete':
          switch (action.Context.Target) {
            case 'AAU': {
              const Row = action.Row as AAU["Row"];
              let PK: AAU["PK"];
              let keys: (keyof typeof PK)[];
              PK = { Key: Row.Key };
              keys = Object.keys(PK) as (keyof typeof PK)[];
              return {...state,
                Sources: { ...state.Sources,
                  AAU: { ...state.Sources.AAU,
                    Rows: state.Sources.AAU.Rows.filter((row) =>
                      !(keys.every((key) => PK[key] === row[key])))
                  }
                }
              };
            }
            case 'FACAD-ParamsBIC': {
              const Row = action.Row as FACADParamsBIC["Row"];
              let PK: FACADParamsBIC["PK"];
              let keys: (keyof typeof PK)[];
              PK = { ReportType: Row.ReportType, BuiltInCategory: Row.BuiltInCategory, Field: Row.Field };
              keys = Object.keys(PK) as (keyof typeof PK)[];
              return {...state,
                Sources: { ...state.Sources,
                  FACADParamsBIC: { ...state.Sources.FACADParamsBIC,
                    Rows: state.Sources.FACADParamsBIC.Rows.filter((row) =>
                      !(keys.every((key) => PK[key] === row[key])))
                  }
                }
              };
            }
            case 'FACAD-Schedules': {
              const Row = action.Row as FACADSchedules["Row"];
              let PK: FACADSchedules["PK"];
              let keys: (keyof typeof PK)[];
              PK = { ID: Row.ID };
              keys = Object.keys(PK) as (keyof typeof PK)[];
              return {...state,
                Sources: { ...state.Sources,
                  FACADSchedules: { ...state.Sources.FACADSchedules,
                    Rows: state.Sources.FACADSchedules.Rows.filter((row) =>
                      !(keys.every((key) => PK[key] === row[key])))
                  }
                }
              };
            }
          }
          return state;
        case 'update':
          switch (action.Context.Target) {
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
            case 'FACAD-Schedules': {
              const Row = action.Row as FACADSchedules["Row"];
              let PK: FACADSchedules["PK"];
              let keys: (keyof typeof PK)[];
              PK = { ID: Row.ID };
              keys = Object.keys(PK) as (keyof typeof PK)[];
              return {...state,
                Sources: { ...state.Sources,
                  FACADSchedules: { ...state.Sources.FACADSchedules,
                    Rows: state.Sources.FACADSchedules.Rows.map((row) =>
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
