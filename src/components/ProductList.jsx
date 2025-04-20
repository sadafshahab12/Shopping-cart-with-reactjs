import React from "react";

const ProductList = ({ products, addToCart }) => {
  return (
    <div>
      <h1>Products</h1>
      <div className="grid grid-cols-3">
        {products.map((item, index) => (
          <div key={index}>
            <h1>{item.name}</h1>
            <img src={item.image} alt={item.name} />
            <p>{item.price}</p>
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
