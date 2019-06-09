
import * as React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux'
import { ArcaReducer } from './reducer';
import { ArcaSocket } from './socket';

const store = createStore(ArcaReducer);

const arcaSocket = new ArcaSocket(store);

arcaSocket.Subscribe('AAU');
arcaSocket.GetInfo('AAU');

function checkStore(): void {
  console.log(store.getState());
}

render(
  <div>
  Finally a connection
    <button onClick={checkStore}>Revisar</button>
  </div>,
  document.getElementById('root')
);
