
const server = require('http').createServer();

const io = require('socket.io')(server, {
    serveClient: false
});

io.on('connect', (socket) => {
    console.log('connected', socket);
});

server.listen(3000);
console.log('Listening 3000');
