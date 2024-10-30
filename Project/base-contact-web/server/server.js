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

    socket.on('send-love-01', (data) => {
        console.log('Received love 01:', data);
        // Cập nhật trạng thái game tại đây
        io.emit('receive-love-01', data);
        socket.broadcast.emit('love 01 :', data);
    });
    socket.on('send-love-02', (data) => {
        console.log('Received love 02:', data);
        // Cập nhật trạng thái game tại đây
        io.emit('receive-love-02', data);
        socket.broadcast.emit('love 02 :', data);
    });

    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });
});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});