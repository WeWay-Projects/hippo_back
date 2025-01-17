require('dotenv').config()
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose');
const userRouter = require('./components/users/users-router');

const PORT = process.env.PORT || 5000;
const app = express()


app.use(cors({
    credentials: true,
    origin: ['https://hippocto.meme', 'https://www.hippocto.meme', 'http://localhost:5174', 'https://1jfqnl4w-5173.euw.devtunnels.ms']
}));
app.use(express.json());
app.use(cookieParser());
app.use('/user', userRouter);


const start = async () => {
    try {
        await mongoose.connect(process.env.DB_URL)
        app.listen(PORT, () => {
            console.log(`Server started on PORT = ${PORT}`)
        })
    } catch (e) {
        console.log(e);
    }
}

start()



