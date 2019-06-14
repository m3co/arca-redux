
import { ArcaState, ArcaActionsNotify,
  FACADParamsBIC, FACADSchedules, FACADBuiltInCategories,
  AAU } from '../types';
import { initialState } from '..';

export function insert(state: ArcaState = initialState, action: ArcaActionsNotify): ArcaState {
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
    case 'FACAD-BuiltInCategories': {
      const Row = action.Row as FACADBuiltInCategories["Row"];
      return {...state,
        Sources: { ...state.Sources,
          FACADBuiltInCategories: { ...state.Sources.FACADBuiltInCategories,
            Rows: [...state.Sources.FACADBuiltInCategories.Rows, Row]
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
}
