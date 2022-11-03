import React, { useState, useEffect } from 'react';

//commerceJS
import { commerce } from './lib/commerce';
//components
import { Products, Navbar } from './components';
import Commerce from '@chec/commerce.js';

const App = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  }
  
  useEffect(() => {
    fetchProducts();
  }, []);

  console.log(products);

  return (
    <div>
      <Navbar />
      <Products />
    </div>
  )
}

export default App