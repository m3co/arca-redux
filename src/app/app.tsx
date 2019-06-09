
import * as React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux'
import { ArcaReducer } from './reducer';
import { ArcaSocket } from './socket';

const store = createStore(ArcaReducer);
const arcaSocket = new ArcaSocket(store);

render(
  <div>
    Finally a connection
    <button onClick={() => console.log(store.getState())}>Show State</button>
    <button onClick={() => arcaSocket.Subscribe('AAU')}>Subscribe</button>
    <button onClick={() => arcaSocket.GetInfo('AAU')}>GetInfo</button>
    <button onClick={() => arcaSocket.Select('AAU')}>Select</button>
  </div>,
  document.getElementById('root')
);
