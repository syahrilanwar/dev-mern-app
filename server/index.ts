import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';
import { connectDatabase } from './config/database';
import { connectApp } from './config/app';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use(connectApp);

connectDatabase;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
