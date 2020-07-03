import { State, Row, PK, SearchResultItem } from '../types/state';
import { Action } from '../types/actions';

export const initialState: State = {
  Source: {
    'Projects': [],
    'Contractors': [],
    'FACAD-Reports': [],
    'FACAD-Report-Filters': [],
    'FACAD-CFT-AAU': [],
    'FACAD-CFT-Filters-AAU': [],
    'FACAD-preCFT-AAU': [],
    'FACAD-preCFT-AAU-Key': [],
    'FACAD-ParamsBIC': [],
    'FACAD-BuiltInCategories': [],
    'AAU': [],
    'AAU-QTO': [],
    'AAU-Tasks-Gantt': [],
    'AAU-APU-Tasks-Gantt': [],
    'AAU-APU-AEU-Tasks-Gantt': [],
    'AAU-Concretize': [],
    'AAU-APU-in-App': [],
    'APU': [],
    'APU-Import-Supplies': [],
    'APU-Import-Supplies-in-App': [],
    'APU-MetaSupplies': [],
    'APU-P-Supplies': [],
    'APU-QTO': [],
    'APU-Tasks': [],
    'APU-Tasks-Gantt': [],
    'APU-Assign': [],
    'AEU': [],
    'Budget-AAU': [],
    'Budget-AAU-vs-General': [],
    'Tasks-Month-CashFlow-AAU': [],
  },
  Search: [],
};

const update = (source: Row[], newRow: Row, pk: PK) => {
  const keys = Object.keys(pk) as (keyof typeof pk)[];

  return source.map(row => keys.find(key => pk[key] === row[key]) ? newRow : row);
};

const toDelete = (source: Row[], pk: PK) => {
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
  if (action.payload) {
    const { Context: { Source, Target } } = action.payload;
    const currentSource = state.Source[Target];

    switch (action.type) {
      case 'Select':
        return createNewState(state, Source, action.payload.Result as Row[]);
      case 'Search':
        return { ...state, Search: action.payload.Result as SearchResultItem[] };
      case 'insert':
        return createNewState(state, Target, [...currentSource, action.payload.Row]);
      case 'update':
        return createNewState(state, Target, update(currentSource, action.payload.Row, action.payload.PK));
      case 'delete':
        return createNewState(state, Target, toDelete(currentSource, action.payload.PK));
      default:
        return state;
    }
  }

  return state;
};
