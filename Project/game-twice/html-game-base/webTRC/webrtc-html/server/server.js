const express = require('express');
const cors = require('cors');


const app = express();

app.use(express.json());
app.use(cors());

let offer;

app.post('/offer', (req, res) => {
    console.log("check");
    offer = req.body;
    res.json(offer);
});

app.post('/answer', (req, res) => {
    const answer = req.body;
    // Ở đây, bạn có thể gửi answer trở lại trang1.html
    console.log('Received answer:', answer);
    res.sendStatus(200);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});