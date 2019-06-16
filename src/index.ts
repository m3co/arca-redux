
import { ArcaState, ArcaActions } from './types';
import { Notify } from './notify';
import { Select } from './select';
import { Getinfo } from './getInfo';

export { ArcaSocket } from './socket';

export { FACADBuiltInCategories, FACADParamsBIC, FACADSchedules, AAU } from './types';

export const initialState: ArcaState = {
  Sources: {
    AAU: {
      Rows: [],
      Info: null
    },
    FACADParamsBIC: {
      Rows: [],
      Info: null
    },
    FACADSchedules: {
      Rows: [],
      Info: null
    },
    FACADBuiltInCategories: {
      Rows: [],
      Info: null,
    }
  },
  active: false
};

export function Reducer(state: ArcaState = initialState, action: ArcaActions): ArcaState {
  switch (action.type) {
    case 'Connect':
      return { ...state, active: true }
    case 'Disconnect':
      return { ...state, active: false }
    case 'Notify':
      return Notify(state, action);
    case 'Select':
      return Select(state, action);
    case 'GetInfo':
      return Getinfo(state, action);
    default:
      return state;
  }
}
