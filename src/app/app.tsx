
import * as React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux'
import { Reducer } from './reducers';
import { ArcaSocket } from './socket';
import { v4 as uuid4 } from 'uuid';
import { AAU } from './reducers/types';

const store = createStore(Reducer);
const arcaSocket = new ArcaSocket(store);

render(
  <div>
    Finally a connection
    <button onClick={(): void => console.log(store.getState())}>Show State</button>
    <div>
      <button onClick={(): void => arcaSocket.Subscribe('AAU')}>Subscribe</button>
      <button onClick={(): void => arcaSocket.GetInfo('AAU')}>GetInfo</button>
      <button onClick={(): void => arcaSocket.Select('AAU')}>Select</button>
      <button onClick={(): void => {
        const row = {...store.getState().Sources.AAU.Rows[3]};
        const PK = {
          Key: row.Key
        } as AAU["Row"];
        row.Description = uuid4() + ' desmonte casa existente + retiro';
        arcaSocket.Update('AAU', { Row: row, PK } );
      }}>Update</button>
    </div>
    <div>
      <button onClick={(): void => arcaSocket.Subscribe('FACAD-ParamsBIC')}>Subscribe</button>
      <button onClick={(): void => arcaSocket.GetInfo('FACAD-ParamsBIC')}>GetInfo</button>
      <button onClick={(): void => arcaSocket.Select('FACAD-ParamsBIC')}>Select</button>
    </div>
  </div>,
  document.getElementById('root')
);
