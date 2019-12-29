
import Socket from 'socket.io-client';
import { ARCASocket } from './socket';
import { reducer } from './reducer';
import { createStore } from 'redux';

const URL = 'http://localhost:8086';
const source = 'FACAD-Reports';

test(`Perform Update at ${source} over a Row`, (done): void => {
  const io = Socket(URL);
  const store = createStore(reducer);
  const socket = new ARCASocket(store, io);

  socket.Select(source);
  socket.Subscribe(source);
  socket.GetInfo(source);

  let updating = false;
  let i = 0;
  store.subscribe((): void => {
    const state = store.getState();
    const Source = state.Source[source];
    if (state.Connected && !updating &&
      Source.Info &&
      Source.Rows.length &&
      Source.Subscribed) {
      expect(Source).toMatchSnapshot();
      i++;

      updating = true;
      socket.Update(source, {
        BuiltInCategory: 'INVALID',
        ID: 19,
        Name: 'modified name',
        PathName: '12121sdgcw',
        Field1: '',
        Field2: '',
        Field3: '',
        ReportType: '',
      }, { ID:'3eff0c6b-e248-41bc-bc8f-d5233f881e1c' });
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
      if (Source.Rows[0].ID === 19) {
        expect(Source.Rows).toMatchSnapshot();
        expect(Source.Requests.length).toBe(0);
        done();
        return;
      }
      i++;
    }
    if (i === 4) {
      fail();
    }
  });
});

test(`Perform Update at FACAD-preCFT-AAU-Key over a Row with different Row and PK`, (done): void => {
  const source = 'FACAD-preCFT-AAU-Key';
  const io = Socket(URL);
  const store = createStore(reducer);
  const socket = new ARCASocket(store, io);

  socket.Select(source);
  socket.Subscribe(source);
  socket.GetInfo(source);

  let updating = false;
  let i = 0;
  store.subscribe((): void => {
    const state = store.getState();
    const Source = state.Source[source];
    if (state.Connected && !updating &&
      Source.Info &&
      Source.Rows.length &&
      Source.Subscribed) {
      expect(Source).toMatchSnapshot();
      i++;

      updating = true;
      socket.Update(source, {
        Family: 'Concrete',
        Type: 'Concreto Muro de contencion',
        Key: '1.3.1'
      }, { ID:'61bb4f24-a89d-40d8-970a-f393dd3eb207', PK: {
        Family: 'Concrete',
        Type: 'Concreto Muro de contencion',
        Key: null
      }});
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
      if (Source.Rows[0].Key === '1.3.1') {
        expect(Source.Rows).toMatchSnapshot();
        expect(Source.Requests.length).toBe(0);
        done();
        return
      }
      i++;
    }
    if (i === 4) {
      fail();
    }
  });
});
