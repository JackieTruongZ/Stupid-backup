import * as http from 'http';

// tạo dữ liệu  

const postData = JSON.stringify({
  name: 'John Doe',
  email: 'john.doe@example.com',
});

// thiết lập options cho yêu cầu mạng 

const options = {
  hostname: 'localhost',
  port: 3000,
  method: 'POST',
  path: '/api/users',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(postData),
  },
};

// gửi yêu cầu mạng và nhận phản hồi

const req = http.request(options, (res) => {
  console.log(`Status Code: ${res.statusCode}`);

  res.on('data', (chunk) => {
    console.log(`Body: ${chunk}`);
  });

  res.on('end', () => {
    console.log('No more data in response.');
  });
});

req.on('error', (e) => {
  console.error(`problem with request: ${e.message}`);
});

req.write(postData);
req.end();
