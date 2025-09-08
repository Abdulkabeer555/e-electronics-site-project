import React, { useState } from 'react';
import ProductsList from '../components/ProductList.jsx';
import ProductDetail from '../components/ProductDetail.jsx';
import CartPage from '../components/CartPage.jsx';
import './Product.css'

function Product() {
  const [currentPage, setCurrentPage] = useState('products');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const products = [
    { id: 'gaming-laptop', name: 'Gaming Laptop', price: 1200, image: './assets/images/gaming-laptop.jpg' },
    { id: 'ultrabook', name: 'Ultrabook', price: 950, image: './assets/images/ultrabook.jpeg' },
    { id: '2-in-1-laptop', name: '2-in-1 Laptop', price: 800, image: './assets/images/best-budget-2-in-1-laptop.webp' },
    { id: 'highend-smartphone', name: 'High-End Smartphone', price: 750, image: './assets/images/highendsmartphone.jpeg' },
    { id: 'mid-range-smartphone', name: 'Mid-Range Smartphone', price: 450, image: './assets/images/mid-range-smartphone2.jpeg' },
    { id: 'budget-smartphone', name: 'Budget Smartphone', price: 200, image: './assets/images/budget-smartphone.webp' },
    { id: 'foldable-phone', name: 'Foldable Smartphone', price: 1500, image: './assets/images/foldable-phone2.jpg' },
    { id: 'headphone', name: 'Wireless Headphones', price: 150, image: './assets/images/headphone.png' },
    { id: 'bluetooth-speaker', name: 'Bluetooth Speaker', price: 75, image: './assets/images/bluetooth-speaker.jpg' },
    { id: 'true-wireless-earbuds', name: 'True Wireless Earbuds', price: 99, image: './assets/images/true-wireless-earbuds3.webp' },
    { id: 'dslr-camera', name: 'DSLR Camera', price: 850, image: './assets/images/dslr-camera.webp' },
    { id: 'mirrorless-camera', name: 'Mirrorless Camera', price: 1100, image: './assets/images/mirror-less-camera.jpg' },
    { id: 'action-camera', name: 'Action Camera', price: 300, image: './assets/images/action-camera.jpeg' },
    { id: 'smart-watch', name: 'Smartwatch', price: 250, image: './assets/images/smart-watch.jpeg' },
    { id: 'smart-home-hub', name: 'Smart Home Hub', price: 120, image: './assets/images/smart-home-hub.webp' },
  ];

  const handleViewDetails = (product) => {
    setSelectedProduct(product);
    setCurrentPage('detail');
  };

  const handleBack = () => {
    setCurrentPage('products');
    setSelectedProduct(null);
  };

  const handleAddToCart = (product) => {
    try {
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      const existingItem = cart.find(item => item.id === product.id);

      if (existingItem) {
        existingItem.quantity++;
      } else {
        cart.push({ ...product, quantity: 1 });
      }

      localStorage.setItem('cart', JSON.stringify(cart));
      
      setShowSuccessMessage(true);
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 3000);

    } catch (e) {
      console.error("Error adding product to cart:", e);
    }
  };

  const renderPage = () => {
    switch(currentPage) {
      case 'products':
        return (
          <ProductsList
            products={products}
            onViewDetails={handleViewDetails}
            showSuccessMessage={showSuccessMessage}
          />
        );
      case 'detail':
        return (
          <ProductDetail
            product={selectedProduct}
            onBack={handleBack}
            onAddToCart={handleAddToCart}
          />
        );
      case 'cart':
        return <CartPage onBackToProducts={() => setCurrentPage('products')} />;
      default:
        return null;
    }
  };

  return (
    <div>

      {renderPage()}

    </div>
  );
}

export default Product;
