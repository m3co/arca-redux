import get from 'lodash/get';
import { Store } from 'redux';
import { createSelector } from 'reselect';
import { State } from '../types/state';
import { getAggsBySpecificSource } from '../utils';

export const getArcaSource = (state: Store) => get(state, 'arca.Source', {});
export const getSpecificSource = (state: Store, source: keyof State['Source']) => get(state, `arca.Source[${source}]`, []);

export const getAggsBySpecificSourceSelector = createSelector(
  getArcaSource,
  (arca: State['Source']) => getAggsBySpecificSource(arca)
);
