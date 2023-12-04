// routes/wishlistRoutes.js
import express from 'express';
import { addToWishlistCtrl, getWishlistCtrl, removeFromWishlistCtrl } from '../controllers/whishListCtrl.js';
import { isLoggedIn } from '../middlewares/isLoggedIn.js';

const wishlistRoutes = express.Router();

wishlistRoutes.post('/add-to-wishlist', isLoggedIn, addToWishlistCtrl);
wishlistRoutes.post('/remove-from-wishlist', isLoggedIn, removeFromWishlistCtrl);
wishlistRoutes.get('/get-wishlist/:userId', isLoggedIn, getWishlistCtrl);
export default wishlistRoutes;
