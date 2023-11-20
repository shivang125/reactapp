// Cart.jsx
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CartItemsContext } from '../../Context/CartItemsContext';
import './cart.css';

const Cart = () => {
  const cartItemsContext = useContext(CartItemsContext);
  const { items, totalAmount, removeItem, quantity } = cartItemsContext;
  const navigate = useNavigate();

  const handleRemoveItem = (item) => {
    removeItem(item);
  };

  const handleQuantityChange = (itemId, action) => {
    quantity(itemId, action);
  };

  const proceedToCheckout = () => {
    // Store cartItems in sessionStorage before navigating to /checkout
    sessionStorage.setItem('cartItems', JSON.stringify(items));

    // Pass cartItems as a prop when navigating to /checkout
    navigate('/checkout');
  };

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      <div className="cart-items">
        {items.map((item) => (
          <div className="cart-item" key={item.id}>
            <img src={item.imageUrl} alt={item.name} />
            <span className="item-name">{item.name}</span>
            <span className="item-price">Rs {item.price}</span>
            <div className="item-quantity">
              <button onClick={() => handleQuantityChange(item.id, 'DEC')}>-</button>
              <span>{item.itemQuantity}</span>
              <button onClick={() => handleQuantityChange(item.id, 'INC')}>+</button>
            </div>
            <button onClick={() => handleRemoveItem(item)}>Remove</button>
          </div>
        ))}
      </div>
      <div className="cart-total">
        <div className="mt-2">
          <span className="text-base font-medium">Total:</span>
          <span className="text-base font-medium text-gray-900 ml-1">
            Rs {totalAmount}
          </span>
        </div>
      </div>
      <Link to="/checkout">
        <button className="proceed-button" onClick={proceedToCheckout}>
          Proceed to Checkout
        </button>
      </Link>
    </div>
  );
};

export default Cart;
