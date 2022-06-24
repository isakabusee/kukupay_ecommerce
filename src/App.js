// import './App.css';
// import Products from './component/Products/Products';
// import Navbar from './component/Navbar/Navbar'
import React, { useState, useEffect } from 'react';
import { commerce } from './lib/commerce';

import { Products, Navbar } from './components';

function App() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  }
  useEffect(() => {
    fetchProducts();
  },[]);

  console.log(products);
  return (
    <div className="App">
     <Navbar />
     <Products products={products}/>
    </div>
  );
}

export default App;
