const express = require('express');
const router = express.Router();
const { addBook, getAllBooks, getBookById, updateBook, deleteBook } = require('../Controllers/BookController');

// Placeholder for authentication middleware
const fakeAuth = (req, res, next) => {
    // Simulate an admin user for now
    req.user = { role: 'admin' };
    next();
};

// Route to add a new book (admin only)
router.post('/add', fakeAuth, addBook);
// List all books
router.get('/', getAllBooks);
// Get a book by ID
router.get('/:id', getBookById);
// Update a book (admin only)
router.put('/:id', fakeAuth, updateBook);
// Delete a book (admin only)
router.delete('/:id', fakeAuth, deleteBook);

module.exports = router; 