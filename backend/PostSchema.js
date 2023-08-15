const mongoose = require('mongoose');


const postSchema = new mongoose.Schema(
    {
        author: { type: String, required: true },
        title: { type: String, required: true },
        opinion: { type: String, required: true },
    },
    {
        timestamps: true,
    }
);
module.exports = mongoose.model('Post', postSchema);