import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartItemsContext } from '../../Context/CartItemsContext';
import "./cart.css";

const Cart = () => {
  const cartItemsContext = useContext(CartItemsContext);
  const { items, totalAmount, removeItem, quantity } = cartItemsContext;

  const handleRemoveItem = (item) => {
    removeItem(item);
  };

  const handleQuantityChange = (itemId, action) => {
    quantity(itemId, action);
  };

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      <div className="cart-items">
        {items.map((item) => (
          <div className="cart-item" key={item.id}>
            <img src={item.imageUrl} alt={item.name} />
            <span className="item-name">{item.name}</span>
            <span className="item-price">Rs{item.price}</span>
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
        Total: Rs {totalAmount}
      </div>
      <Link to="/checkout">
        <button className="proceed-button">Proceed to Checkout</button>
      </Link>
    </div>
  );
};

export default Cart;
