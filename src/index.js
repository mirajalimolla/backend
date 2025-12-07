import dotenv from 'dotenv';
import express from 'express';
import dbConnect from './db/index.js';

dotenv.config(
    {
        path: './.env'
    }
);

const app = express();

app.listen(process.env.PORT, () => {
    console.log(`YOUR SERVER IN RUNNING ON ${process.env.PORT}`);
});

dbConnect();