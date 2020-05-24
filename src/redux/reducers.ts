import { State, Row, PK } from '../types/state';
import { Action } from '../types/actions';

export const initialState: State = {
  Source: {
    'APU-Import-Supplies': [],
  },
};

const Update = (source: Row[], newRow: Row, pk: PK) => {
  const keys = Object.keys(pk) as (keyof typeof pk)[];

  return source.map(row => keys.find(key => pk[key] === row[key]) ? newRow : row);
};

const Delete = (source: Row[], pk: PK) => {
  const keys = Object.keys(pk) as (keyof typeof pk)[];

  return source.filter(row => !keys.find(key => pk[key] === row[key]));
};

const createNewState = (state: State, source: keyof State['Source'], rows: Row[]) => {
  return {
    ...state,
    Source: {
      ...state.Source,
      [source]: rows,
    },
  };
};

export const arcaReducer = (state: State = initialState, action: Action): State => {
  const { Source } = action.payload;
  const currentSource = state.Source[Source];

  switch (action.type) {
    case 'Select':
      return createNewState(state, Source, action.payload.Result);
    case 'insert':
      return createNewState(state, Source, [...currentSource, action.payload.Row]);
    case 'update':
      return createNewState(state, Source, Update(currentSource, action.payload.Row, action.payload.PK));
    case 'delete':
      return createNewState(state, Source, Delete(currentSource, action.payload.PK));
    default:
      return state;
  }
};
