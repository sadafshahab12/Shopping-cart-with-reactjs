import { useState } from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      alert("alreaday added");
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    const updateCartItem = cartItems.filter((item) => item.id !== id);
    setCartItems(updateCartItem);
  };

  const increaseQty = (id) => {
    const updateCart = cartItems.map((item) =>
      item.id === id ? { ...item, qty: item.qty + 1 } : item
    );
    setCartItems(updateCart);
  };

  const decreaseQty = (id) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item
    );
    setCartItems(updatedCart);
  };
  const cartTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.qty, 0);
  };
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      image:
        "https://powerhouseexpress.com.pk/cdn/shop/files/BoostSonicWirelessHeadset-4.jpg?v=1706705136",
      price: 59.99,
    },
    {
      id: 2,
      name: "Smart Watch",
      image:
        "https://www.aysonline.pk/wp-content/uploads/2024/09/Untitled-design-15-2.jpg",
      price: 129.99,
    },
    {
      id: 3,
      name: "Gaming Mouse",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSKyldMKXteQPLP0CO6opvq_Lka-UUCrMZoA&s",
      price: 39.99,
    },
    {
      id: 4,
      name: "Bluetooth Speaker",
      image:
        "https://pk.hellofaster.com/cdn/shop/files/Front5.jpg?v=1738235188",
      price: 79.99,
    },
    {
      id: 5,
      name: "4K Monitor",
      image:
        "https://megacomputer.pk/wp-content/uploads/2023/07/24-117-064-S08.jpg",
      price: 299.99,
    },
  ];

  return (
    <>
      <main>
        <div>
          <h1>Shopping Cart</h1>
          <div className="grid grid-cols-2">
            <ProductList products={products} addToCart={addToCart} />
            <Cart
              removeFromCart={removeFromCart}
              cartItems={cartItems}
              increaseQty={increaseQty}
              decreaseQty={decreaseQty}
              cartTotal={cartTotal}
            />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
