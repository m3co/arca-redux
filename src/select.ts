
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
                ...state.Sources.AAU,
                Rows: Entries.Rows as AAU["Row"][],
              }
            }
          };
        case 'FACAD-ParamsBIC':
          return { ...state,
            Sources: { ...state.Sources,
              FACADParamsBIC: {
                ...state.Sources.FACADParamsBIC,
                Rows: Entries.Rows as FACADParamsBIC["Row"][],
              }
            }
          };
        case 'FACAD-Schedules':
          return { ...state,
            Sources: { ...state.Sources,
              FACADSchedules: {
                ...state.Sources.FACADSchedules,
                Rows: Entries.Rows as FACADSchedules["Row"][],
              }
            }
          };
          case 'FACAD-CFT':
            return { ...state,
              Sources: { ...state.Sources,
                FACADCFT: {
                  ...state.Sources.FACADCFT,
                  Rows: Entries.Rows as FACADCFT["Row"][],
                }
              }
            };
      }
      return state;
    default:
      return state;
  };
}
