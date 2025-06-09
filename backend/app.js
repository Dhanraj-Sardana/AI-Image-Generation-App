import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';

import router from './routes/route.js';
import imgRouter from './routes/imgRoute.js';
import connectDb from './config/db.js';

const app = express();

// Connect database
connectDb();

app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true }));

// Default routes
app.use('/api/post', router);
app.use('/api/image', imgRouter);

// Error handler
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || 'Something went wrong!';
  return res.status(status).json({ success: false, status, message });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, (err) => {
  err
    ? console.error(`Server not connected: ${err.message}`)
    : console.log(`Server connected at PORT: ${PORT}`);
});
