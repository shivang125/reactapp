import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../slices/cart/cartSlices";
import categoryReducer from "../slices/categories/categoriesSlice";
import couponsReducer from "../slices/coupons/couponsSlice";
import ordersReducer from "../slices/orders/ordersSlices";
import productReducer from "../slices/products/productSlices";
import reviewsReducer from "../slices/reviews/reviewsSlice";
import usersReducer from "../slices/users/usersSlice";

//store
const store = configureStore({
  reducer: {
    users: usersReducer,
    products: productReducer,
    categories: categoryReducer,
    carts: cartReducer,
    coupons: couponsReducer,
    orders: ordersReducer,
    reviews: reviewsReducer,
  },
});

export default store;
