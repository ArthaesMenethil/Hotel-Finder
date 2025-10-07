import React from "react";
import "./Cart.css";

const Cart = ({ cartItems, onClose, onPay }) => {
  const total = cartItems.reduce((sum, item) => {
    const price = parseFloat(item.price.replace("$", ""));
    return sum + price;
  }, 0);

  return (
    <div className="overlay" onClick={onClose}>
      <div className="cart-card" onClick={(e) => e.stopPropagation()}>
        <h2 className="cart-title">Your Cart</h2>

        {cartItems.length === 0 ? (
          <p className="cart-empty">Cart is empty</p>
        ) : (
          <div className="cart-items">
            {cartItems.map((item, index) => (
              <div key={index} className="cart-item">
                <span>{item.title}</span>
                <span>{item.price}</span>
              </div>
            ))}
            <hr />
            <div className="cart-total">
              <strong>Total:</strong> ${total}
            </div>
            <button className="more-btn" onClick={onPay}>
              Pay
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
