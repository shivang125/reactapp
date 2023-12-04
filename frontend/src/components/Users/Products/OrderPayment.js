// OrderPayment.jsx
import React, { useState } from 'react';
import AddShippingAddress from '../Forms/AddShippingAddress';
import './OrderPayment.css';

const OrderPayment = () => {
  const [cartItems] = useState(JSON.parse(sessionStorage.getItem('cartItems')) || []);
  const [voucherCode, setVoucherCode] = useState('');
  const [appliedVoucher, setAppliedVoucher] = useState(null);

  const calculateTotalDiscountedPrice = () => {
    let totalItemPrice = cartItems.reduce((total, item) => {
      const itemTotal = item.price * item.itemQuantity;
      if (isNaN(itemTotal)) {
        console.error('Invalid data:', item);
      }
  
      return total + itemTotal;
    }, 0);
  
    if (appliedVoucher) {
      totalItemPrice -= appliedVoucher.discountAmount;
      totalItemPrice = Math.max(totalItemPrice, 0);
    }
  
    return totalItemPrice;
  };

  const applyVoucherHandler = () => {
    if (voucherCode === 'SPECIAL10') {
      setAppliedVoucher({ code: 'SPECIAL10', discountAmount: 10 });
    } else {
      alert('Invalid voucher code');
    }
  };

  const removeVoucherHandler = () => {
    setAppliedVoucher(null);
  };

  const createOrderSubmitHandler = (e) => {
    e.preventDefault();
    console.log('Order Submitted!');
  };

  return (
    <div className="bg-gray-50">
      <main className="mx-auto max-w-7xl px-4 pt-16 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <h1>Checkout</h1>

          <div className="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">
            <div>
              <div className="mt-10 border-t border-gray-200 pt-10">
                <AddShippingAddress />
              </div>
            </div>

            <div className="mt-10 lg:mt-0 order-summary">
              <h2 className="text-lg font-medium text-gray-900">Order summary</h2>

              <div className="mt-4 rounded-lg border border-gray-200 bg-white shadow-sm">
                <h3 className="sr-only">Items in your cart</h3>
                <ul role="list" className="divide-y divide-gray-200 item-list">
                  {cartItems.map((product) => (
                    <li key={product.id} className="flex py-6 px-4 sm:px-6 item">
                      <div className="flex-shrink-0">
                        <img src={product.imageUrl} alt={product.imageAlt} className="w-20 rounded-md" />
                      </div>
                      <div className="ml-6 flex flex-1 flex-col item-details">
                        <span className="text-sm font-medium text-gray-900">{product.name}</span>
                        <span className="text-sm text-gray-500">Rs {product.price} each</span>
                        <span className="text-sm text-gray-500">Quantity: {product.itemQuantity}</span>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="border-t border-gray-200 py-6 px-4 sm:px-6 voucher-container">
                  <div className="flex space-x-4">
                    <label htmlFor="voucher" className="text-sm font-medium text-gray-700">
                      Voucher code
                    </label>
                    <input
                      type="text"
                      id="voucher"
                      name="voucher"
                      value={voucherCode}
                      onChange={(e) => setVoucherCode(e.target.value)}
                      className="block w-40 rounded-md border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm voucher-input"
                    />
                  </div>
                  <button
                    onClick={applyVoucherHandler}
                    className="ml-4 bg-indigo-600 border border-transparent py-2 px-4 text-sm font-medium text-white rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                  >
                    Apply Voucher
                  </button>
                  {appliedVoucher && (
                    <button
                      onClick={removeVoucherHandler}
                      className="ml-4 bg-red-600 border border-transparent py-2 px-4 text-sm font-medium text-white rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                    >
                      Remove Voucher
                    </button>
                  )}
                </div>
                <dl className="space-y-6 border-t border-gray-200 py-6 px-4 sm:px-6 subtotal-container">
                  <div className="flex items-center justify-between border-t border-gray-200 pt-6">
                    <dt className="text-base font-medium">Sub Total</dt>
                    <dd className="text-base font-medium text-gray-900">
                      Rs {appliedVoucher ? calculateTotalDiscountedPrice() : cartItems.reduce(
                        (total, item) => total + item.price * item.itemQuantity,
                        0
                      )}
                    </dd>
                  </div>
                </dl>

                <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                  <button
                    onClick={createOrderSubmitHandler}
                    className="w-full rounded-md border border-transparent bg-indigo-600 py-3 px-4 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                  >
                    Confirm Payment - Rs {appliedVoucher ? calculateTotalDiscountedPrice() : cartItems.reduce(
                      (total, item) => total + item.price * item.itemQuantity,
                      0
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default OrderPayment;
