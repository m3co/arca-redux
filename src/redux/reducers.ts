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

export const arcaReducer = (state: State = initialState, action: Action): State => {
  const currentSource = state.Source[action.payload.Source];

  switch (action.type) {
    case 'Select':
      return  {
        ...state,
        Source: {
          ...state.Source,
          [action.payload.Source]: {
            ...currentSource,
            ...action.payload.Result,
          }
        }
      };
    case 'insert':
      return {
        ...state,
        Source: {
          ...state.Source,
          [action.payload.Source]: {
            ...currentSource,
            ...[...currentSource, action.payload.Row],
          }
        }
      };
    case 'update':
      return {
        ...state,
        Source: {
          ...state.Source,
          [action.payload.Source]: {
            ...currentSource,
            ...Update(currentSource, action.payload.Row, action.payload.PK),
          }
        }
      };
    case 'delete':
      return {
        ...state,
        Source: {
          ...state.Source,
          [action.payload.Source]: {
            ...currentSource,
            ...Delete(currentSource, action.payload.PK),
          }
        }
      };
    default:
      return state;
  }
};
