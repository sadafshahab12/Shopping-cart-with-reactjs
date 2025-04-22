import React from "react";
import { IoMdTrash } from "react-icons/io";

const Cart = ({
  cartItems,
  removeFromCart,
  increaseQty,
  decreaseQty,
  cartTotal,
}) => {
  return (
    <div>
      <h1 className="text-xl font-bold pt-5 pl-5">Cart</h1>
      {cartItems.length === 0 ? (
        <p className="pt-5 pl-5">Cart is empty</p>
      ) : (
        <div className=" space-y-4 pt-4 px-4 ">
          {cartItems.map((item, index) => (
            <div key={index} className="grid grid-cols-3 sm:grid-cols-5 items-center gap-5">
              <img
                src={item.image}
                alt={item.name}
                className="w-10 sm:w-15 h-10 sm:h-15 object-cover"
              />
              <h1 className="text-[12px] sm:text-[14px] font-black">{item.name}</h1>
              <p className="text-[12px] ">{item.price}</p>
              <div className="flex  items-center gap-3 ">
                <button
                  className="border border-slate-600 text-[16px] cursor-pointer h-6 w-6 rounded-md active:scale-95 transition-all "
                  onClick={() => {
                    decreaseQty(item.id);
                  }}
                >
                  {" "}
                  -{" "}
                </button>
                <p>{item.qty}</p>
                <button
                  className="border border-slate-600 text-[16px] cursor-pointer h-6 w-6 rounded-md active:scale-95 transition-all "
                  onClick={() => {
                    increaseQty(item.id);
                  }}
                >
                  {" "}
                  +{" "}
                </button>
              </div>
              <button
                className="bg-gradient-to-tr from-purple-300 to-purple-600 text-[16px] cursor-pointer h-8 w-8 rounded-lg flex justify-center items-center sm:justify-self-center justify-self-end "
                onClick={() => removeFromCart(item.id)}
              >
                <IoMdTrash />
              </button>
            </div>
          ))}
          <div className="border-t border-b border-gray-400 py-4">
            {" "}
            {cartItems.length === 0 ? (
              ""
            ) : (
              <div className=" flex justify-between items-center px-4">
                <p>Total Price </p>
                <p>{cartTotal().toFixed(2)} </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
