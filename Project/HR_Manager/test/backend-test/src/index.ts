import express from 'express';
import mongoose from 'mongoose';
import UserController from './controllers/UserController';

const app = express();
const PORT = 3000;

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/test_hr');

// Register routes
app.use('/users', UserController);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
