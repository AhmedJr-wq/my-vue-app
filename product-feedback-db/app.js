const express = require('express');
const mongoose = require('mongoose');
const url = 'mongodb://127.0.0.1:27017/product-feedback';

const app = express();

const cors = require('cors');

// Connect to MongoDB
const connectDatabase = async () => {
    try {
        await mongoose.connect(url);
        console.log('MongoDB Connected');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
}

app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.use('/feedback', require('./routes/feedback'));

const startServer = async () => {
    try {
        await connectDatabase();
        app.listen(9000, () => {
            console.log('Server is listening on port 9000');
        })
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
}

startServer()

    
