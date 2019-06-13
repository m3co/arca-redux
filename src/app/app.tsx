
import * as React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux'
import { Reducer } from './reducers';
import { ArcaSocket } from './socket';
import { v4 as uuid4 } from 'uuid';
import { FACADSchedules } from './reducers/types'

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
        row.Description = uuid4() + ' desmonte casa existente + retiro';
        arcaSocket.Update('AAU', { Row: row, PK: {
          Key: row.Key
        }} );
      }}>Update</button>
    </div>
    <div>
      <button onClick={(): void => arcaSocket.Subscribe('FACAD-ParamsBIC')}>Subscribe</button>
      <button onClick={(): void => arcaSocket.GetInfo('FACAD-ParamsBIC')}>GetInfo</button>
      <button onClick={(): void => arcaSocket.Select('FACAD-ParamsBIC')}>Select</button>
    </div>
    <div>
      <button onClick={(): void => arcaSocket.Subscribe('FACAD-Schedules')}>Subscribe</button>
      <button onClick={(): void => arcaSocket.GetInfo('FACAD-Schedules')}>GetInfo</button>
      <button onClick={(): void => arcaSocket.Select('FACAD-Schedules')}>Select</button>
      <button onClick={(): void => {
        const row: FACADSchedules["Row"] = {
          ID: 0,
          Name: uuid4() + ' nombre',
          PathName: uuid4() + ' direccion',
          BuiltInCategory: 'INVALID'
        };

        arcaSocket.Insert('FACAD-Schedules', row);
      }}>Insert</button>
      <button onClick={(): void => {
        const rows = store.getState().Sources.FACADSchedules.Rows;
        const PK: FACADSchedules["PK"] = {
          ID: rows[rows.length - 1].ID
        };

        arcaSocket.Delete('FACAD-Schedules', PK);
      }}>Delete</button>
    </div>
  </div>,
  document.getElementById('root')
);
