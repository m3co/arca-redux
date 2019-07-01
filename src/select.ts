
import { ArcaState, ArcaActions, ArcaEntries, ArcaInfo,
  AAU, FACADParamsBIC, FACADSchedules, FACADCFT } from './types';
import { initialState } from '.'

export function Select(state: ArcaState = initialState, action: ArcaActions): ArcaState {
  switch (action.type) {
    case 'Select':
      let Entries: {
        Rows: ArcaEntries["Row"][];
        Info: ArcaInfo | null;
      } = {
        Rows: action.Result,
        Info: null
      };
      switch (action.Context.Source) {
        case 'AAU':
          return { ...state,
            Sources: { ...state.Sources,
              AAU: {
                Rows: Entries.Rows as AAU["Row"][],
                ...state.Sources.AAU,
              }
            }
          };
        case 'FACAD-ParamsBIC':
          return { ...state,
            Sources: { ...state.Sources,
              FACADParamsBIC: {
                Rows: Entries.Rows as FACADParamsBIC["Row"][],
                ...state.Sources.FACADParamsBIC,
              }
            }
          };
        case 'FACAD-Schedules':
          return { ...state,
            Sources: { ...state.Sources,
              FACADSchedules: {
                Rows: Entries.Rows as FACADSchedules["Row"][],
                ...state.Sources.FACADSchedules,
              }
            }
          };
          case 'FACAD-CFT':
            return { ...state,
              Sources: { ...state.Sources,
                FACADCFT: {
                  Rows: Entries.Rows as FACADCFT["Row"][],
                  ...state.Sources.FACADCFT,
                }
              }
            };
      }
      return state;
    default:
      return state;
  };
}
