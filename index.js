require('dotenv').config()
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose');
const userRouter = require('./components/users/users-router');

const PORT = process.env.PORT || 5000;
const app = express()


app.use(cors({
    // credentials: true,
    origin: true
}));
app.use(express.json());
app.use(cookieParser());
app.use('/user', userRouter);
app.use('/', (req, res) => {
    res.send('Hello')
});

const start = async () => {
    try {
        await mongoose.connect(process.env.DB_URL)
        app.listen(PORT, '0.0.0.0')
    } catch (e) {
        console.log(e);
    }
}

start()



