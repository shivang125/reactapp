import { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CartItemsContext } from "../../Context/CartItemsContext";
import { WishItemsContext } from "../../Context/WishItemsContext";
import {
  addToWishlistAction,
  getWishlistAction,
  removeFromWishlistAction,
} from "../../redux/slices/users/usersSlice";
import WishCard from "../Card/Wishlist/WishCard";
import "./index.css";

const Wishlist = () => {
  const dispatch = useDispatch();
  const wishItems = useContext(WishItemsContext);
  const cartItems = useContext(CartItemsContext);
  const { error, loading, userInfo } = useSelector(
    (state) => state?.users?.userAuth
  );
  useEffect(() => {
    // Dispatch the getWishlistAction when the component mounts
    dispatch(getWishlistAction(userInfo.userFound._id));
  }, [dispatch, userInfo]);
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
                  key={item.id}
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
