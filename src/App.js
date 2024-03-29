import React, { useState, useEffect } from 'react';

//commerceJS
import { commerce } from './lib/commerce';
//components
import { Products, Navbar, Cart, Checkout } from './components';
//reactRouter
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve())
  };

  const handleAddToCart = async (productId, quantity) => {
    setCart(await commerce.cart.add(productId, quantity));
  };

  const handleUpdateCartQty = async (productId, quantity) => {
    setCart(await commerce.cart.update(productId, { quantity }));
  };

  const handleRemoveFromCart = async (productId) => {
    setCart(await commerce.cart.remove(productId));
  };

  const handleEmptyCart = async () => {
    setCart(await commerce.cart.empty());
  };

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
        <Route path='/cart' element={
        <Cart 
        cart={cart}
          handleUpdateCartQty={handleUpdateCartQty}
          handleRemoveFromCart={handleRemoveFromCart}
          handleEmptyCart={handleEmptyCart}
         />} />
         <Route path='/checkout' element={<Checkout cart={cart}/>} />
      </Routes>
    </div>
    </Router>
  );
}

export default App