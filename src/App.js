import React, { useState, useEffect } from 'react';

//commerceJS
import { commerce } from './lib/commerce';
//components
import { Products, Navbar, Cart } from './components';
//reactRouter
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  }

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve())
  }

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);

    setCart(item);
  }

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  console.log(cart);

  return (
    <Router>
    <div>
      <Navbar totalItems={cart.total_items} />
      <Routes>
        <Route path='/' element={<Products products = {products} onAddToCart = {handleAddToCart}/>} />
        <Route path='/cart' element={<Cart cart={cart} />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App