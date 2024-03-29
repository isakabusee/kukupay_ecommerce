// import './App.css';
// import Products from './component/Products/Products';
// import Navbar from './component/Navbar/Navbar'
import React, { useState, useEffect } from 'react';
import { commerce } from './lib/commerce';

import { Products, Navbar, Cart  } from './components';
// import Cart from './components/Cart/Cart';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  }

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  }
  
  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);
    setCart(item.cart);
  }
  
  useEffect(() => {
    fetchProducts();
  },[]);
  
  console.log(cart);
  // console.log(products);
  return (
    <div className="App">
     <Navbar totalItems={cart.total_items} />
     <Products products={products} onAddToCart={handleAddToCart} />
     <Cart cart={cart} />
     {/* <Cart cart={cart}/> */}
    </div>
  );
}

export default App;
