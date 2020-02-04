
import Socket from 'socket.io-client';
import { ARCASocket } from './socket';
import { reducer } from './reducer';
import { createStore } from 'redux';

const URL = 'http://localhost:8086';

const sources: (
  'FACAD-Reports' |
  'FACAD-CFT-AAU' |
  'FACAD-BuiltInCategories' |
  'AAU-Tasks-Gantt'
)[] = [
  'FACAD-Reports',
  'FACAD-CFT-AAU',
  'FACAD-BuiltInCategories',
  'AAU-Tasks-Gantt'
];

sources.forEach((source): void => {
  test(`Retreive Select of ${source}`, (done): void => {
    const io = Socket(URL);
    const store = createStore(reducer);
    const socket = new ARCASocket(store, io);

    socket.Select(source, { Project: 10 });

    let i = 0;
    store.subscribe((): void => {
      i++;
      const state = store.getState();
      if (state.Source[source].Rows.length > 0) {
        expect(state.Source[source].Rows).toMatchSnapshot();
        done();
      } else if (i > 1) {
        fail();
      }
    });
  });
});
