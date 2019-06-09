
import { ArcaState, ArcaActions } from './types';

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
    case 'Select':
      if (action.Context.Source === 'AAU') {
        return { ...state,
          Sources: { ...state.Sources,
            [action.Context.Source]: {
              ...state.Sources[action.Context.Source],
              Rows: action.Result
            }
          }
        }
      }
      return state;
    case 'GetInfo':
      if (action.Context.Source === 'AAU') {
        return { ...state,
          Sources: { ...state.Sources,
            [action.Context.Source]: {
              ...state.Sources[action.Context.Source],
              Info: action.Result
            }
          }
        };
      }
      return state;
    default:
      return state
  }
}
