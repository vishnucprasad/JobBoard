require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const database = require('./database/database');
const userRouter = require('./routes/user');

const app = express();

const port = process.env.PORT || 5000;

database.connect();

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', userRouter);

app.listen(port, () => {
    console.log(`Server is running on  http://localhost:${port}`);
}).on('error', (error) => {
    console.log('\x1b[31mPort ' + error.port + ' is already in use\x1b[0m');
});