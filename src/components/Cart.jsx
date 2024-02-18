import React from "react";
import "../styles/cart.css";

function Cart({ cartItems, updateQuantity }) {
  return (
    <div className="cart">
      <h2 className="text-center mt-2 mb-4">Shopping Cart</h2>
      <div className="cart-items">
        {cartItems.map((item, index) => (
          <div key={index} className="cart-item">
            <img src={item.image} alt={item.title} />
            <div>
              <h3>{item.title}</h3>
              <p>Price: ${item.price}</p>
              <div>
                <label>Quantity:</label>
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) =>
                    updateQuantity(index, parseInt(e.target.value))
                  }
                  min="1"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart;
