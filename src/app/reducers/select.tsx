
import { ArcaState, ArcaActions, ArcaEntries, ArcaInfo } from './types';
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
          Entries.Info = state.Sources[action.Context.Source].Info;
      }
      return { ...state,
        Sources: { ...state.Sources,
          [action.Context.Source]: Entries
        }
      };
    default:
      return state;
  };
}
