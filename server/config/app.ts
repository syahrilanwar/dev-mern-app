import { Router } from 'express';
import authRoute from '../routes/auth';
import homeRoute from '../routes/home';
import { authMiddleware } from '../middleware/authMiddleware';

const connectApp = Router();

connectApp.use('/api/auth', authRoute);
connectApp.use('/api/home', authMiddleware, homeRoute);

export { connectApp };