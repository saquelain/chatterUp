import express from 'express';
import http from 'http';
import path from 'path';
import { Server } from 'socket.io';
import cors from 'cors';
import { connectToDatabase } from './db.config.js';
import { chatModel } from './message.schema.js';
import { userModel } from './user.schema.js';
const __filename = new URL(import.meta.url).pathname;
const __dirname = path.dirname(__filename);
export const app = express();
app.use(cors());

export const server = http.createServer(app);
const publicDirectoryPath = path.join(__dirname, '../public');

const io = new Server(server, {
    cors: {
        origin: '*',
        methods: ["GET", "POST"]
    }
});


server.listen(3000, ()=>{
    console.log(`Server is listening on port 3000`);
    connectToDatabase();
})