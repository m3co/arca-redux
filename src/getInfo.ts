
import { ArcaState, ArcaActions, ArcaEntries, ArcaInfo } from './types';
import { initialState } from '.'

export function Getinfo(state: ArcaState = initialState, action: ArcaActions): ArcaState {
  switch (action.type) {
    case 'GetInfo':
      let Entries: {
        Rows: ArcaEntries["Row"][];
        Info: ArcaInfo | null;
      } = {
        Rows: [],
        Info: action.Result
      };
      switch (action.Context.Source) {
        case 'AAU':
          Entries.Rows = state.Sources.AAU.Rows;
          break;
        case 'FACAD-Schedules':
          Entries.Rows = state.Sources.FACADSchedules.Rows;
          break;
        case 'FACAD-CFT':
          Entries.Rows = state.Sources.FACADCFT.Rows;
          break;
        case 'FACAD-ParamsBIC':
          Entries.Rows = state.Sources.FACADParamsBIC.Rows;
          break;
        case 'FACAD-BuiltInCategories':
          Entries.Rows = state.Sources.FACADBuiltInCategories.Rows;
          break;
      }
      return { ...state,
        Sources: { ...state.Sources,
          [action.Context.Source]: Entries
        }
      };
    default:
      return state;
  }
}
