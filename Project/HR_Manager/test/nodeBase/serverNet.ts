import * as net from 'net';

interface User {
    id: number;
    name: string;
    email: string;
}

let users: User[] = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' },
];

const server = net.createServer((socket) => {
    console.log('New connection');

    socket.on('data', (data) => {
        console.log("data : ", data);

        const request = JSON.parse(data.toString());
        let response;

        if (request.method === 'GET' && request.url === '/api/users') {
            response = {
                statusCode: 200,
                body: JSON.stringify(users),
            };
        } else if (request.method === 'POST' && request.url === '/api/users') {
            const newUser: User = request.body;
            newUser.id = users.length + 1;
            users.push(newUser);
            response = {
                statusCode: 201,
                body: JSON.stringify(newUser),
            };
        } else {
            response = {
                statusCode: 404,
                body: JSON.stringify({ error: 'Not found' }),
            };
        }

        socket.write(`HTTP/1.1 ${response.statusCode} OK\r\n`);
        socket.write('Content-Type: application/json\r\n');
        socket.write('\r\n');
        socket.write(response.body);
        socket.end();
    });

    socket.on('error', (err) => {
        console.error('Socket error:', err);
    });

    socket.on('close', () => {
        console.log('Connection closed');
    });
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});