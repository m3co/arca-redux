
import { ArcaState, ArcaActionsNotify, FACADParamsBIC, FACADSchedules, AAU } from '../types';
import { initialState } from '..';

export function remove(state: ArcaState = initialState, action: ArcaActionsNotify): ArcaState {
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
            Rows: state.Sources.AAU.Rows.filter((row): boolean =>
              !(keys.every((key): boolean => PK[key] === row[key])))
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
            Rows: state.Sources.FACADParamsBIC.Rows.filter((row): boolean =>
              !(keys.every((key): boolean => PK[key] === row[key])))
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
            Rows: state.Sources.FACADSchedules.Rows.filter((row): boolean =>
              !(keys.every((key): boolean => PK[key] === row[key])))
          }
        }
      };
    }
  }
  return state;
}
