import React from "react";

const Cart = ({
  cartItems,
  removeFromCart,
  increaseQty,
  decreaseQty,
  cartTotal,
}) => {
  return (
    <div>
      <h1>Shopping Cart - {cartItems.length}</h1>
      <p>
        {" "}
        {cartItems.length === 0
          ? ""
          : `Total Price - ${cartTotal().toFixed(2)}`}{" "}
      </p>
      {cartItems.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <div>
          {cartItems.map((item, index) => (
            <div key={index}>
              <img src={item.image} alt={item.name} />
              <h1>{item.name}</h1>
              <p>{item.price}</p>
              <div>
                <button
                  onClick={() => {
                    decreaseQty(item.id);
                  }}
                >
                  {" "}
                  -{" "}
                </button>
                <p>{item.qty}</p>
                <button
                  onClick={() => {
                    increaseQty(item.id);
                  }}
                >
                  {" "}
                  +{" "}
                </button>
              </div>
              <button onClick={() => removeFromCart(item.id)}>delete</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
