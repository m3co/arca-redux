import { ArcaState, ArcaActions } from "./types";
import { initialState } from ".";


export function RequestResponse(state: ArcaState = initialState, action: ArcaActions): ArcaState {
  switch (action.type) {
    case 'ResponseDUI':
      let newState: ArcaState;
      switch (action.Context.Source) {
        case 'AAU':
          newState = { ...state,
            Sources: {
              ...state.Sources,
              AAU: {
                ...state.Sources.AAU,
                RequestResponses: {
                  ...state.Sources.AAU.RequestResponses,
                }
              }
            }
          };
          delete newState.Sources.AAU.RequestResponses[action.ID];
        case 'FACAD-BuiltInCategories':
          newState = { ...state,
            Sources: {
              ...state.Sources,
              FACADBuiltInCategories: {
                ...state.Sources.FACADBuiltInCategories,
                RequestResponses: {
                  ...state.Sources.FACADBuiltInCategories.RequestResponses,
                }
              }
            }
          };
          delete newState.Sources.FACADBuiltInCategories.RequestResponses[action.ID];
        case 'FACAD-ParamsBIC':
          newState = { ...state,
            Sources: {
              ...state.Sources,
              FACADParamsBIC: {
                ...state.Sources.FACADParamsBIC,
                RequestResponses: {
                  ...state.Sources.FACADParamsBIC.RequestResponses,
                }
              }
            }
          };
          delete newState.Sources.FACADParamsBIC.RequestResponses[action.ID];
        case 'FACAD-Schedules':
          newState = { ...state,
            Sources: {
              ...state.Sources,
              FACADSchedules: {
                ...state.Sources.FACADSchedules,
                RequestResponses: {
                  ...state.Sources.FACADSchedules.RequestResponses,
                }
              }
            }
          };
          delete newState.Sources.FACADSchedules.RequestResponses[action.ID];
        case 'FACAD-CFT':
          newState = { ...state,
            Sources: {
              ...state.Sources,
              FACADCFT: {
                ...state.Sources.FACADCFT,
                RequestResponses: {
                  ...state.Sources.FACADCFT.RequestResponses,
                }
              }
            }
          };
          delete newState.Sources.FACADCFT.RequestResponses[action.ID];
        default:
          newState = state;
      };
      return newState;
    case 'RequestDUI':
      switch (action.Context.Source) {
        case 'AAU':
          return { ...state,
            Sources: {
              ...state.Sources,
              AAU: {
                ...state.Sources.AAU,
                RequestResponses: {
                  ...state.Sources.AAU.RequestResponses,
                  [action.ID]: {
                    Context: action.Context,
                    Params: {
                      PK: action.Params.PK,
                      Row: action.Params.Row,
                    },
                  }
                }
              }
            }
          };
        case 'FACAD-CFT':
          return { ...state,
            Sources: {
              ...state.Sources,
              FACADCFT: {
                ...state.Sources.FACADCFT,
                RequestResponses: {
                  ...state.Sources.FACADCFT.RequestResponses,
                  [action.ID]: {
                    Context: action.Context,
                    Params: {
                      PK: action.Params.PK,
                      Row: action.Params.Row,
                    },
                  }
                }
              }
            }
          };
        case 'FACAD-ParamsBIC':
          return { ...state,
            Sources: {
              ...state.Sources,
              FACADParamsBIC: {
                ...state.Sources.FACADParamsBIC,
                RequestResponses: {
                  ...state.Sources.FACADParamsBIC.RequestResponses,
                  [action.ID]: {
                    Context: action.Context,
                    Params: {
                      PK: action.Params.PK,
                      Row: action.Params.Row,
                    },
                  }
                }
              }
            }
          };
        case 'FACAD-BuiltInCategories':
          return { ...state,
            Sources: {
              ...state.Sources,
              FACADBuiltInCategories: {
                ...state.Sources.FACADBuiltInCategories,
                RequestResponses: {
                  ...state.Sources.FACADBuiltInCategories.RequestResponses,
                  [action.ID]: {
                    Context: action.Context,
                    Params: {
                      PK: action.Params.PK,
                      Row: action.Params.Row,
                    },
                  }
                }
              }
            }
          };
        default:
          return state;
      }
    default:
      return state;
  };
}
