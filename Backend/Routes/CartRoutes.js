const express = require('express');
const router = express.Router();
const cartController = require('../Controllers/CartController');
const { authenticateUser } = require('../middleware/auth'); // your JWT/auth middleware

router.post('/add', authenticateUser, cartController.addToCart);
router.get('/view', authenticateUser, cartController.viewCart);
router.delete('/remove/:bookId', authenticateUser, cartController.removeFromCartByID);
router.put('/update-quantity', authenticateUser, cartController.updateCartItemQuantity);

module.exports = router;
