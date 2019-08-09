
import Socket from 'socket.io-client';
import { ARCASocket } from './socket';
import { reducer } from './reducer';
import { createStore } from 'redux';

const URL = 'http://localhost:8086';
const source = 'FACAD-Schedules';

test(`Perform Insert at ${source} over a Row`, (done): void => {
  const io = Socket(URL);
  const store = createStore(reducer);
  const socket = new ARCASocket(store, io);

  socket.Select(source);
  socket.Subscribe(source);

  let inserting = false;
  let i = 0;
  store.subscribe((): void => {
    const state = store.getState();
    if (state.Connected && !inserting &&
      state.Source[source].Rows.length &&
      state.Source[source].Subscribed) {
      expect(state.Source[source]).toMatchSnapshot();
      i++;

      inserting = true;
      socket.Insert(source, {
        BuiltInCategory: 'INVALID',
        ID: 0,
        Name: 'Lets doit',
        PathName: '',
      }, '3eff0c6b-e248-41bc-bc8f-d5233f881e1c');
    } else if (state.Connected &&
      state.Source[source].Rows.length &&
      state.Source[source].Subscribed &&
      state.Source[source].Requests.length) {
      expect(state.Source[source]).toMatchSnapshot();
      i++;
    } else if (state.Connected &&
      state.Source[source].Rows.length &&
      state.Source[source].Subscribed) {
      expect(state.Source[source].Rows).toMatchSnapshot();
      i++;
    }
    if (i === 4) {
      done();
    }
  });
});
