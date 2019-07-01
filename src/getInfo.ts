
import { ArcaState, ArcaActions } from './types';
import { initialState } from '.'

export function Getinfo(state: ArcaState = initialState, action: ArcaActions): ArcaState {
  switch (action.type) {
    case 'GetInfo':
      switch (action.Context.Source) {
        case 'AAU':
          return { ...state,
            Sources: { ...state.Sources,
              AAU: {
                ...state.Sources.AAU,
                Info: action.Result,
              }
            }
          };
        case 'FACAD-Schedules':
          return { ...state,
            Sources: { ...state.Sources,
              FACADSchedules: {
                ...state.Sources.FACADSchedules,
                Info: action.Result,
              }
            }
          };
        case 'FACAD-CFT':
          return { ...state,
            Sources: { ...state.Sources,
              FACADCFT: {
                ...state.Sources.FACADCFT,
                Info: action.Result,
              }
            }
          };
        case 'FACAD-ParamsBIC':
          return { ...state,
            Sources: { ...state.Sources,
              FACADParamsBIC: {
                ...state.Sources.FACADParamsBIC,
                Info: action.Result,
              }
            }
          };
        case 'FACAD-BuiltInCategories':
          return { ...state,
            Sources: { ...state.Sources,
              FACADBuiltInCategories: {
                ...state.Sources.FACADBuiltInCategories,
                Info: action.Result,
              }
            }
          };
      }
      return state;
    default:
      return state;
  }
}
