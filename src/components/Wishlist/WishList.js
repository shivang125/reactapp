// Wishlist.js

import { useContext } from "react";
import { useDispatch } from "react-redux";
import { CartItemsContext } from "../../Context/CartItemsContext";
import { WishItemsContext } from "../../Context/WishItemsContext";
import {
    addToWishlistAction,
    removeFromWishlistAction,
} from "../../redux/slices/users/usersSlice";
import WishCard from "../Card/Wishlist/WishCard";
import "./index.css";

const Wishlist = () => {
  const dispatch = useDispatch();
  const wishItems = useContext(WishItemsContext);
  const cartItems = useContext(CartItemsContext);

  const addToWishlistHandler = (itemId) => {
    dispatch(addToWishlistAction(itemId));
  };

  const removeFromWishlistHandler = (itemId) => {
    dispatch(removeFromWishlistAction(itemId));
  };

  return (
    <div className="wishlist">
      <div className="wishlist__container">
        <div className="wishlist__header">
          <h2>Your Wishlist</h2>
        </div>
        <div className="wishlist__items__container">
          <div className="wishlist__items">
            {wishItems.items.length > 0 ? (
              wishItems.items.map((item) => (
                <WishCard
                  key={item._id}
                  item={item}
                  onAddToWishlist={addToWishlistHandler}
                  onRemoveFromWishlist={removeFromWishlistHandler}
                />
              ))
            ) : (
              <>No items</>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
