import get from 'lodash/get';
import { Store } from 'redux';
import { State } from '../types/state';

export const getArcaSource = (state: Store) => get(state, 'arca.Source', {});
export const getSpecificSource = (state: Store, source: keyof State['Source']) => get(state, `arca.Source[${source}]`, []);
