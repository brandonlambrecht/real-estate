import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.log(error);
  });

const app = express();

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

app.use(express.json());

//User Route
app.use('/api/user', userRouter);

//Auth Route
app.use('/api/auth', authRouter);

//Middleware //
app.use((error, req, res, next) => {
  const statusCode = error.statusCode || 500;
  const message = error.message || 'Internal Sever Error';
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
