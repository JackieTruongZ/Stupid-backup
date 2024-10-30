const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = socketIO(server, {
    cors: {
        origin: '*', // Replace with the URL of your client-side application
        methods: ['GET', 'POST']
    }
});

io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('player-move', (data) => {
        console.log('Received player move:', data);
        // Cập nhật trạng thái game tại đây
        io.emit('game-update', data);
        socket.broadcast.emit('other-player-move', data);
    });

    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });
});

server.listen(3000, '192.168.1.13', () => {
    console.log('Server is running on port 3000');
});