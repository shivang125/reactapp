import { useEffect, useState } from "react";
import { CartItemsContext } from "./CartItemsContext";

const CartItemsProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalAmountOfItems, setTotalAmountOfItems] = useState(0);

  const addToCartHandler = (item, quantity) => {
    const { id, name, price, imageUrl, category, size } = item;
    const updatedCart = [...cartItems];
  
    // Check if the item is already in the cart
    const existingItemIndex = updatedCart.findIndex((cartItem) => cartItem.id === id);
  
    if (existingItemIndex !== -1) {
      // If the item is already in the cart, update its quantity
      updatedCart[existingItemIndex].itemQuantity += quantity;
    } else {
      // If it's a new item, add it to the cart
      updatedCart.push({ id, name, price, imageUrl, category, itemQuantity: quantity, size });
    }
  
    setCartItems(updatedCart);
  };

  const removeFromCartHandler = (item) => {
    setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
  };

  const calculateTotalAmount = (currentCartItems) => {
    let total = 0;
    currentCartItems.forEach((item) => {
      total += item.price * item.itemQuantity;
    });
    setTotalAmountOfItems(total);
  };

  const quantityHandler = (itemId, action) => {
    setCartItems((prevCartItems) => {
      return prevCartItems.map((item) => {
        if (item.id === itemId) {
          if (action === 'INC') {
            return { ...item, itemQuantity: item.itemQuantity + 1 };
          } else if (action === 'DEC' && item.itemQuantity > 1) {
            return { ...item, itemQuantity: item.itemQuantity - 1 };
          }
        }
        return item;
      });
    });
  };
  

  useEffect(() => {
    calculateTotalAmount(cartItems);
  }, [cartItems]);

  const cartItemCtx = {
    items: cartItems,
    totalAmount: totalAmountOfItems,
    addItem: addToCartHandler,
    removeItem: removeFromCartHandler,
    quantity: quantityHandler,
  };

  return (
    <CartItemsContext.Provider value={cartItemCtx}>
      {props.children}
    </CartItemsContext.Provider>
  );
};

export default CartItemsProvider;
