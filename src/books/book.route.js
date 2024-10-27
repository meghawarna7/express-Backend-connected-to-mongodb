const express = require('express');
const Book = require('./book.model'); // Ensure the path is correct
const { postABook, getAllBooks, getSingleBook, UpdateBook, deleteABook } = require('./book.controller');
const router = express.Router();

/* Get all books
router.get('/', async (req, res) => {
    try {
        const books = await Book.find(); // Fetch all books from the database
        res.status(200).send(books);
    } catch (error) {
        console.error("Error fetching books", error);
        res.status(500).send({ message: "Failed to fetch books" });
    }
});
*/

// Create a new book
router.post('/create-book', postABook)
   
// Get all  books
router.get('/', getAllBooks)

// Get single  books
router.get("/:id", getSingleBook)

// update a book endpoint
router.put("/edit/:id", UpdateBook);

router.delete("/:id", deleteABook)

module.exports = router;
