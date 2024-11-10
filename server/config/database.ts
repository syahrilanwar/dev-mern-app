
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDatabase = mongoose.connect(process.env.MONGODB_URI || '', {})
    .then(() => {
        console.log('MongoDB Connected');
    }).catch((error) => {
        console.log(error);
    });

export { connectDatabase }