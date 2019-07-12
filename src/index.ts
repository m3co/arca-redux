
import { ArcaState, ArcaActions } from './types';
import { Notify } from './notify';
import { Select } from './select';
import { Getinfo } from './getInfo';
import { Search } from './search';
import { RequestResponse } from './requestResponses';

export { ArcaSocket } from './socket';

export { FACADBuiltInCategories, FACADParamsBIC, FACADSchedules, FACADCFT, AAU } from './types';

export const initialState: ArcaState = {
  Sources: {
    AAU: {
      Rows: [],
      Info: null,
      RequestResponses: {}
    },
    FACADParamsBIC: {
      Rows: [],
      Info: null,
      RequestResponses: {}
    },
    FACADSchedules: {
      Rows: [],
      Info: null,
      RequestResponses: {}
    },
    FACADBuiltInCategories: {
      Rows: [],
      Info: null,
      RequestResponses: {}
    },
    FACADCFT: {
      Rows: [],
      Info: null,
      RequestResponses: {}
    },
  },
  active: false
};

export function Reducer(state: ArcaState = initialState, action: ArcaActions): ArcaState {
  switch (action.type) {
    case 'Connect':
      return { ...state, active: true }
    case 'Disconnect':
      return { ...state, active: false }
    case 'RequestDUI':
    case 'ResponseDUI':
      return RequestResponse(state, action);
    case 'Notify':
      return Notify(state, action);
    case 'Select':
      return Select(state, action);
    case 'GetInfo':
      return Getinfo(state, action);
    case 'Search':
      return Search(state, action);
    default:
      return state;
  }
}
