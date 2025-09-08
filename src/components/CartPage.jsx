import React, { useEffect, useState } from 'react';
import Cart from '../pages/Cart';

function CartPage({ onBackToProducts }) {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(storedCart);
  }, []);

  const handleItemUpdate = (index, action) => {
    const updatedCart = [...cartItems];

    if (action === 'increase') {
      updatedCart[index].quantity += 1;
    } else if (action === 'decrease') {
      if (updatedCart[index].quantity > 1) {
        updatedCart[index].quantity -= 1;
      } else {
        updatedCart.splice(index, 1);
      }
    } else if (action === 'remove') {
      updatedCart.splice(index, 1);
    }

    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <Cart cartItems={cartItems} onItemUpdate={handleItemUpdate} onBackToProducts={onBackToProducts}
    />
  );
}

export default CartPage;

