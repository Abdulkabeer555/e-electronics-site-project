import React, { useState } from 'react';
import ProductsList from '../components/ProductList.jsx';
import ProductDetail from '../components/ProductDetail.jsx';
import CartPage from '../components/CartPage.jsx';
import './Product.css';

// Image Imports (from src/Public/assets/images/)
import GamingLaptop from '../../Public/assets/images/gaming-laptop.jpg';
import Ultrabook from '../../Public/assets/images/ultrabook.jpeg';
import TwoInOneLaptop from '../../Public/assets/images/best-budget-2-in-1-laptop.webp';
import HighEndSmartphone from '../../Public/assets/images/highendsmartphone.jpeg';
import MidRangeSmartphone from '../../Public/assets/images/mid-range-smartphone2.jpeg';
import BudgetSmartphone from '../../Public/assets/images/budget-smartphone.webp';
import FoldablePhone from '../../Public/assets/images/foldable-phone2.jpg';
import Headphone from '../../Public/assets/images/headphone.png';
import BluetoothSpeaker from '../../Public/assets/images/bluetooth-speaker.jpg';
import TrueWirelessEarbuds from '../../Public/assets/images/true-wireless-earbuds3.webp';
import DSLRCamera from '../../Public/assets/images/dslr-camera.webp';
import MirrorlessCamera from '../../Public/assets/images/mirror-less-camera.jpg';
import ActionCamera from '../../Public/assets/images/action-camera.jpeg';
import SmartWatch from '../../Public/assets/images/smart-watch.jpeg';
import SmartHomeHub from '../../Public/assets/images/smart-home-hub.webp';

function Product() {
  const [currentPage, setCurrentPage] = useState('products');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const products = [
    { id: 'gaming-laptop', name: 'Gaming Laptop', price: 1200, image: GamingLaptop },
    { id: 'ultrabook', name: 'Ultrabook', price: 950, image: Ultrabook },
    { id: '2-in-1-laptop', name: '2-in-1 Laptop', price: 800, image: TwoInOneLaptop },
    { id: 'highend-smartphone', name: 'High-End Smartphone', price: 750, image: HighEndSmartphone },
    { id: 'mid-range-smartphone', name: 'Mid-Range Smartphone', price: 450, image: MidRangeSmartphone },
    { id: 'budget-smartphone', name: 'Budget Smartphone', price: 200, image: BudgetSmartphone },
    { id: 'foldable-phone', name: 'Foldable Smartphone', price: 1500, image: FoldablePhone },
    { id: 'headphone', name: 'Wireless Headphones', price: 150, image: Headphone },
    { id: 'bluetooth-speaker', name: 'Bluetooth Speaker', price: 75, image: BluetoothSpeaker },
    { id: 'true-wireless-earbuds', name: 'True Wireless Earbuds', price: 99, image: TrueWirelessEarbuds },
    { id: 'dslr-camera', name: 'DSLR Camera', price: 850, image: DSLRCamera },
    { id: 'mirrorless-camera', name: 'Mirrorless Camera', price: 1100, image: MirrorlessCamera },
    { id: 'action-camera', name: 'Action Camera', price: 300, image: ActionCamera },
    { id: 'smart-watch', name: 'Smartwatch', price: 250, image: SmartWatch },
    { id: 'smart-home-hub', name: 'Smart Home Hub', price: 120, image: SmartHomeHub },
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
    switch (currentPage) {
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
