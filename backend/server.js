const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT || 5000;
const Post = require('./PostSchema'); // Make sure the path is correct
mongoose
    .connect('mongodb+srv://pro:DDwiYcBcxZDXEHDR@cluster0.iqfprtk.mongodb.net/TravelForum')
    .then(() => {
        console.log('connected to db');
    })
    .catch((err) => {
        console.log(err.message);
    });
app.use(express.json());
app.use(cors());

app.post('/add-variable', async (req, res) => {
    const { name, place, opinion } = req.body;
    const author = name;
    const title = place;
    console.log("Insert to add");
    try {
        // Create a new post instance
        const newPost = new Post({ author, title, opinion });
        // Save the instance to the database
        await newPost.save();
        console.log('Variable inserted successfully!');
        res.status(200).json({ message: 'Variable inserted successfully' });
    } catch (err) {
        console.error('Error inserting variable:', err);
        res.status(500).json({ message: 'Error inserting variable' });
    }
});

app.get('/get-all-items', async (req, res) => {
    try {
        const items = await Post.find({}, '-_id'); // Fetch all items from MongoDB
        res.status(200).json(items);
    } catch (err) {
        console.error('Error fetching items:', err);
        res.status(500).json({ message: 'Error fetching items' });
    }
});

app.delete('/delete-item/:id', async (req, res) => {
    const itemId = req.params.id;

    try {
        const deletedItem = await Post.findOneAndDelete({ opinion: itemId });

        if (!deletedItem) {
            res.status(404).json({ message: 'Item not found' });
        } else {
            console.log('Item deleted successfully!');
            res.status(200).json({ message: 'Item deleted successfully' });
        }
    } catch (err) {
        console.error('Error deleting item:', err);
        res.status(500).json({ message: 'Error deleting item' });
    }
});
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});