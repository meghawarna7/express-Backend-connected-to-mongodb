const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5001;

// Middleware
app.use(express.json()); // for parsing JSON requests
app.use(cors({
    origin: ['http://localhost:5173'], // replace with frontend URL
    credentials: true
}));

// Routes
const bookRoutes = require('./src/books/book.route');
app.use('/api/books', bookRoutes);

// Default route
app.get('/', (req, res) => {
    res.send('Book Server');
});

// MongoDB Connection
mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Failed to connect to MongoDB', err));

// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
