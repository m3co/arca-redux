
import { ArcaState, ArcaActions } from '../types';
import { insert } from './insert';
import { remove } from './remove';
import { update } from './update';
import { initialState } from '..'

export function Notify(state: ArcaState = initialState, action: ArcaActions): ArcaState {
  switch (action.type) {
    case 'Notify':
      switch (action.Method) {
        case 'insert':
          return insert(state, action);
        case 'delete':
          return remove(state, action);
        case 'update':
          return update(state, action);
        default:
          return state;
      }
    default:
      return state;
  }
}
