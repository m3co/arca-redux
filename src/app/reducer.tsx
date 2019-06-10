
import { ArcaState, ArcaActions, ArcaEntries, ArcaInfo, AAU } from './types';

const initialState: ArcaState = {
  Sources: {
    AAU: {
      Rows: [],
      Info: null
    }
  },
  active: false
};

export function ArcaReducer(state: ArcaState = initialState, action: ArcaActions): ArcaState {
  switch (action.type) {
    case 'Connect':
      return { ...state, active: true }
    case 'Disconnect':
      return { ...state, active: false }
    case 'Notify':
      let Rows: ArcaEntries["Row"][];
      if (action.Context.Target === 'AAU') {
        Rows = state.Sources.AAU.Rows.map((row: AAU["Row"]): AAU["Row"] =>
          (row.Key === action.Row.Key) ? action.Row : row);
      } else {
        return state;
      }
      return {...state,
        Sources: { ...state.Sources,
          [action.Context.Target]: { ...state.Sources[action.Context.Target],
            Rows: Rows
          }
        }
      };
    case 'Select':
    {
      let Entries: {
        Rows: ArcaEntries["Row"][];
        Info: ArcaInfo | null;
      } = {
        Rows: action.Result,
        Info: null
      };
      if (action.Context.Source === 'AAU') {
        Entries.Info = state.Sources[action.Context.Source].Info;
      }
      return { ...state,
        Sources: { ...state.Sources,
          [action.Context.Source]: Entries
        }
      }
    }
    case 'GetInfo':
    {
      let Entries: {
        Rows: ArcaEntries["Row"][];
        Info: ArcaInfo | null;
      } = {
        Rows: [],
        Info: action.Result
      };
      if (action.Context.Source === 'AAU') {
        Entries.Rows = state.Sources[action.Context.Source].Rows;
      }
      return { ...state,
        Sources: { ...state.Sources,
          [action.Context.Source]: Entries
        }
      };
    }
    default:
      return state
  }
}
