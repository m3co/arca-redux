
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
                Rows: state.Sources.AAU.Rows,
                Info: action.Result
              }
            }
          };
        case 'FACAD-Schedules':
          return { ...state,
            Sources: { ...state.Sources,
              FACADSchedules: {
                Rows: state.Sources.FACADSchedules.Rows,
                Info: action.Result
              }
            }
          };
        case 'FACAD-CFT':
          return { ...state,
            Sources: { ...state.Sources,
              FACADCFT: {
                Rows: state.Sources.FACADCFT.Rows,
                Info: action.Result
              }
            }
          };
        case 'FACAD-ParamsBIC':
          return { ...state,
            Sources: { ...state.Sources,
              FACADParamsBIC: {
                Rows: state.Sources.FACADParamsBIC.Rows,
                Info: action.Result
              }
            }
          };
        case 'FACAD-BuiltInCategories':
          return { ...state,
            Sources: { ...state.Sources,
              FACADBuiltInCategories: {
                Rows: state.Sources.FACADBuiltInCategories.Rows,
                Info: action.Result
              }
            }
          };
      }
      return state;
    default:
      return state;
  }
}
