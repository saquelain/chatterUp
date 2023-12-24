import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';

const baseUrl = '127.0.0.1';

export const connectToDatabase = async () => {
    try {
        await mongoose.connect(`mongodb://${baseUrl}/Chatterup`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            family: 4
        });
        console.log("MongoDB connected using mongoose");
    } catch (err) {
        console.log(`Error connecting to database: `, err);
    }
}

// mongodb://localhost:27017