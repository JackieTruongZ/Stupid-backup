import * as net from 'net';

// Tạo dữ liệu
const postData = JSON.stringify({
  name: 'John Doe',
  email: 'john.doe@example.com',
});

// Thiết lập options cho yêu cầu mạng
const options = {
  host: 'localhost',
  port: 3000,
  method: 'POST',
  path: '/api/users',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(postData),
  },
};

// Gửi yêu cầu mạng và nhận phản hồi
const req = net.connect(options, () => {
  req.write(postData);
  req.end();
});

req.on('data', (chunk) => {
  console.log(`Body: ${chunk}`);
});

req.on('end', () => {
  console.log('No more data in response.');
});

req.on('error', (e) => {
  console.error(`problem with request: ${e.message}`);
});