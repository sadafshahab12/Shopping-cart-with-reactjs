import React from "react";

const ProductList = ({ products, addToCart }) => {
  return (
    <>
      <div className="grid grid-cols-3 p-10 gap-5">
        {products.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center gap-4 border border-slate-200 p-6 shadow-lg"
          >
            <h1 className="text-xl font-black">{item.name}</h1>
            <img
              src={item.image}
              alt={item.name}
              className="w-50 h-50 object-cover"
            />
            <p className="text-lg font-semibold">${item.price}</p>
            <button
              onClick={() => addToCart(item)}
              className="bg-gradient-to-tr from-purple-300 to-purple-600 text-[16px] cursor-pointer py-2 px-4 rounded-lg"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductList;
