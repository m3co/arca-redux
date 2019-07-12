
import { ArcaState, ArcaActions, ArcaEntries,
  FACADCFT } from './types';
import { initialState } from '.'

export function Search(state: ArcaState = initialState, action: ArcaActions): ArcaState {
  switch (action.type) {
    case 'Search':
      switch (action.Context.Target) {
        case 'FACAD-CFT':
          return { ...state,
            Sources: {
              ...state.Sources,
              FACADCFT: {
                ...state.Sources.FACADCFT,
                Search: {
                  ...state.Sources.FACADCFT.Search ? state.Sources.FACADCFT.Search : {},
                  [action.Context.Field]: [...action.Result]
                }
              }
            }
          };
        default:
          return state;
      }
    default:
      return state;
  }
}
