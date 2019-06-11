
import { ArcaState, ArcaActions, ArcaEntries, ArcaInfo, AAU, FACADParamsBIC } from './types';
import { initialState } from './'

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
      }
      return state;
    default:
      return state;
  };
}
