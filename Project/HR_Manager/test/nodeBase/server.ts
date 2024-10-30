import * as http from 'http';

interface User {
  id: number;
  name: string;
  email: string;
}

let users: User[] = [
  { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' },
];

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');
  console.log("req : ", req);


  if (req.url === '/api/users' && req.method === 'GET') {
    res.statusCode = 200;
    res.end(JSON.stringify(users));
  } else if (req.url === '/api/users' && req.method === 'POST') {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk.toString();
    });
    req.on('end', () => {
      const newUser: User = JSON.parse(body);
      newUser.id = users.length + 1;
      users.push(newUser);
      res.statusCode = 201;
      res.end(JSON.stringify(newUser));
    });
  } else {
    res.statusCode = 404;
    res.end(JSON.stringify({ error: 'Not found' }));
  }
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
