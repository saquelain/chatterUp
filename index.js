import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import cors from 'cors';
import { connectToDatabase } from './db.config.js';

export const app = express();
app.use(cors());

export const server = http.createServer(app);

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