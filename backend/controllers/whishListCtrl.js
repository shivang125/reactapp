import asyncHandler from "express-async-handler";
import mongoose from 'mongoose';
import Wishlist from "../model/WishList.js";
// @desc    Add to Wishlist
// @route   POST /api/v1/wishlist/add-to-wishlist
// @access  Public

export const addToWishlistCtrl = asyncHandler(async (req, res) => {
  const { userId, productId, productName, imageUrl, price } = req.body;

  try {
    let wishlist = await Wishlist.findOne({ userId });

    if (!wishlist) {
      wishlist = new Wishlist({ userId, items: [] });
    }

    wishlist.items.push({ productId, productName, imageUrl, price });
    await wishlist.save();

    res.status(200).json({ success: true, wishlist });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});

// @desc    Remove from Wishlist
// @route   POST /api/v1/wishlist/remove-from-wishlist
// @access  Public

export const removeFromWishlistCtrl = asyncHandler(async (req, res) => {
  const { userId, productId } = req.body;

  try {
    const wishlist = await Wishlist.findOne({ userId });

    if (!wishlist) {
      return res.status(404).json({ success: false, error: 'Wishlist not found' });
    }

    wishlist.items = wishlist.items.filter((item) => item.productId !== productId);
    await wishlist.save();

    res.status(200).json({ success: true, wishlist });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});

// @desc    Get Wishlist
// @route   GET /api/v1/wishlist/:userId
// @access  Public

export const getWishlistCtrl = asyncHandler(async (req, res) => {
    const userId = req.params.userId.replace(/[^a-zA-Z0-9]/g, '').toString();

    console.log('Raw userId:', userId);
    try {
      const wishlist = await Wishlist.findOne({ user: mongoose.Types.ObjectId(userId) });
        console.log(wishlist);
      if (!wishlist) {
        return res.status(404).json({ success: false, error: 'Wishlist not found' });
      }
  
      res.status(200).json({ success: true, wishlist });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
  });