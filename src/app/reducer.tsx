
import { ArcaState, ArcaActions, initialState } from './types';

export function ArcaReducer(state: ArcaState = initialState, action: ArcaActions): ArcaState {
    switch (action.type) {
        case 'Connect':
            return { ...state, active: true }
        case 'Disconnect':
            return { ...state, active: false }
        case 'Select':
            return { ...state, Sources: {
                AAU: {
                        Rows: action.Result
                    }
                }
            }
        default:
            return state
    }
}
