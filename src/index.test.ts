
import { createStore } from 'redux';
import { Reducer } from './';

test('Has an initial state', (): void => {
  const store = createStore(Reducer);
  const state = store.getState();

  expect(state.Sources.AAU.Rows.length).toBe(0);
  expect(state.Sources.FACADParamsBIC.Rows.length).toBe(0);
  expect(state.Sources.FACADSchedules.Rows.length).toBe(0);
  expect(state.Sources.FACADBuiltInCategories.Rows.length).toBe(0);
});

