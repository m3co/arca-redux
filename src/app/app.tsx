
import * as React from 'react';
import { render } from 'react-dom';
import * as Socket from 'socket.io-client';

const io = Socket();

render(
    <div>Finally a connection</div>,
    document.getElementById("root")
);
