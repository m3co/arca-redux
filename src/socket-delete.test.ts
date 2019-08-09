
import Socket from 'socket.io-client';
import { ARCASocket } from './socket';
import { reducer } from './reducer';
import { createStore } from 'redux';

const URL = 'http://localhost:8086';
const source = 'FACAD-Schedules';

test(`Perform Delete at ${source} over a Row`, (done): void => {
  const io = Socket(URL);
  const store = createStore(reducer);
  const socket = new ARCASocket(store, io);

  socket.Select(source);
  socket.Subscribe(source);
  socket.GetInfo(source);

  let inserting = false;
  let i = 0;
  store.subscribe((): void => {
    const state = store.getState();
    const Source = state.Source[source];
    if (state.Connected && !inserting &&
      Source.Info &&
      Source.Rows.length &&
      Source.Subscribed) {
      expect(Source).toMatchSnapshot();
      i++;

      inserting = true;
      socket.Delete(source, {
        ID: 22,
        BuiltInCategory: 'INVALID',
        PathName: 'whatever',
      }, '26e0bb20-814d-46d1-954e-baef35e630b5');
    } else if (state.Connected &&
      Source.Info &&
      Source.Rows.length &&
      Source.Subscribed &&
      Source.Requests.length) {
      expect(Source).toMatchSnapshot();
      i++;
    } else if (state.Connected &&
      Source.Info &&
      Source.Rows.length &&
      Source.Subscribed) {
      expect(Source.Rows).toMatchSnapshot();
      i++;
    }
    if (i === 4) {
      done();
    }
  });
});
