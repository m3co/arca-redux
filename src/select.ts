
import { ArcaState, ArcaActions, ArcaEntries, ArcaInfo,
  AAU, FACADParamsBIC, FACADSchedules } from './types';
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
                Info: state.Sources.AAU.Info
              }
            }
          };
        case 'FACAD-ParamsBIC':
          return { ...state,
            Sources: { ...state.Sources,
              FACADParamsBIC: {
                Rows: Entries.Rows as FACADParamsBIC["Row"][],
                Info: state.Sources.FACADParamsBIC.Info
              }
            }
          };
        case 'FACAD-Schedules':
          return { ...state,
            Sources: { ...state.Sources,
              FACADSchedules: {
                Rows: Entries.Rows as FACADSchedules["Row"][],
                Info: state.Sources.FACADSchedules.Info
              }
            }
          };
      }
      return state;
    default:
      return state;
  };
}
