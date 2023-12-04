import mongoose from 'mongoose';

const wishlistSchema = new mongoose.Schema({
    userId: String,
    items: [
      {
        productId: String,
        productName: String,
        imageUrl: String,
        price: Number,
      },
    ],
  });
  
const Wishlist = mongoose.model('Wishlist', wishlistSchema);

export default Wishlist;