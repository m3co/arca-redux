
import * as React from 'react';
import { render } from 'react-dom';
import * as Socket from 'socket.io-client';
import { v4 as uuid4 } from 'uuid';
import { createStore, Store } from 'redux'
import { ArcaState, ActionsArca, AAUResponse } from './types';
import { ArcaReducer } from './reducer';

class ArcaSocket {
    private io: SocketIOClient.Socket;
    public constructor(store: Store<ArcaState, ActionsArca>) {
        const io = this.io = Socket();
        const Table = 'AAU'

        io.on('connect', (): void => {
            store.dispatch({
                type: 'Connect'
            })
            io.emit('jsonrpc', {
                ID: uuid4(),
                Method: 'Subscribe',
                Params: {
                    Target: Table,
                },
            });
        });

        io.on('jsonrpc', (response: AAUResponse): void => {
            switch (response.Method) {
                case 'Subscribe':
                    this.Select(Table);
                    break;
                case 'Unsubscribe':
                    break;
                case 'Select':
                    store.dispatch({
                        type: response.Method,
                        Context: {
                            Source: Table
                        },
                        Result: response.Result
                    });
                    break;
                default:
                    console.log(response);
                    break;
            }
        })
    }

    public Select(Table: string): void {
        this.io.emit('jsonrpc', {
            ID: uuid4(),
            Context: {
                Source: Table
            },
            Method: 'Select',
            Params: {
                PK: {}
            }
        });
    }
}

const store = createStore(ArcaReducer);

new ArcaSocket(store);

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
