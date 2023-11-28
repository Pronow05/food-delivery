import React from 'react';
import './Cart.css'; // Import your CSS file

const Cart = () => {
  return (
    <div className="cart-container">
      <h2 className="cart-heading">Your Order</h2>
      <div className="cart-details">
        {/* Add your cart details here */}
        <p>Item: burger 
           Item: fries
        </p>
        <p>Quantity: 1</p>
        <p>Total: 400rs</p>
      </div>
      <button className="proceed-to-checkout-btn">Proceed to Checkout</button>
    </div>
  );
};

export default Cart;
