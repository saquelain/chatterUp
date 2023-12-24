import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';

const baseUrl = process.env.MONGODB || '0.0.0.0:27017';
const url = process.env.DB_URL;

export const connectToDatabase = async () => {
    try {
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("MongoDB connected using mongoose");
    } catch (err) {
        console.log(`Error connecting to database: `, err);
    }
}

// mongodb://localhost:27017