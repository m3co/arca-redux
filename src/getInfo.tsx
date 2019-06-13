
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
          Entries.Rows = state.Sources[action.Context.Source].Rows;
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
