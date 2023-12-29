require('dotenv').config();

const express = require('express');

const mongoose = require('mongoose');

const cors = require('cors');

const app = express();

app.use(cors());

const PORT = process.env.PORT;

const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('connected', () => {
    console.log('Đã kết nối thành công tới MongoDB Atlas');
});

db.on('error', err => {
    console.error(`Lỗi kết nối tới MongoDB Atlas: ${err}`);
});

app.listen(PORT, () => {
    console.log(`Server is listening on PORT ${PORT}`);
});
