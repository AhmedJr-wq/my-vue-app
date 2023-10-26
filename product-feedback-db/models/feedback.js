const mongoose = require('mongoose');

const productRequests = new mongoose.Schema({
    id: Number,
    title: String,
    category: String,
    upvotes: Number,
    status: String,
    description: String,
    comments: [
        {
            id: Number,
            content: String,
            user: {
                image: String,
                name: String,
                username: String,
            },
        },
    ],
});

const Feedback = mongoose.model('productRequests', productRequests);

module.exports = Feedback;
