import Socket from 'socket.io-client';
import { ARCASocket } from './socket';
import { reducer } from './reducer';
import { createStore } from 'redux';

const URL = 'http://localhost:8086';

test('Connect to the server', (done): void => {
  const io = Socket(URL);
  const store = createStore(reducer);
  new ARCASocket(store, io);

  const state = store.getState();
  store.subscribe((): void => {
    const state = store.getState();
    expect(state.Connected).toBe(true);
    done();
  });

  expect(state.Connected).toBe(false);
});

const sources: (
  'FACAD-Reports' |
  'FACAD-CFT-AAU' |
  'FACAD-BuiltInCategories'
)[] = [
  'FACAD-Reports',
  'FACAD-CFT-AAU',
  'FACAD-BuiltInCategories'
];

sources.forEach((source): void => {
  test(`Retreive GetInfo of ${source}`, (done): void => {
    const io = Socket(URL);
    const store = createStore(reducer);
    const socket = new ARCASocket(store, io);

    socket.GetInfo(source);
    let i = 0;
    store.subscribe((): void => {
      i++;
      const state = store.getState();
      if (state.Source[source].Info) {
        expect(state.Source[source].Info).toMatchSnapshot();
        done();
      } else if (i > 1) {
        fail();
      }
    });
  });
});

test(`Retreive Subscribe of FACAD-Reports`, (done): void => {
  const io = Socket(URL);
  const store = createStore(reducer);
  const socket = new ARCASocket(store, io);

  socket.Subscribe('FACAD-Reports');
  let i = 0;
  store.subscribe((): void => {
    i++;
    const state = store.getState();
    if (state.Source['FACAD-Reports'].Subscribed) {
      expect(state.Source['FACAD-Reports'].Subscribed).toBe(true);
      done();
    } else if (i > 1) {
      fail();
    }
  });
});
