import React from 'react';
import Gaming_Laptop from '../../Public/assets/images/gaming-laptop.jpg'
import SmartPhone from '../../Public/assets/images/highendsmartphone.jpeg'
import Wireless_Headphones from '../../Public/assets/images/headphone.png'
import './Product.css'
import { Link } from 'react-router-dom';


function Home() {
  return (
    <div>
      <header className="bg-primary text-white text-center py-5">
        <div className="container">
          <h1 className="display-4">Top Electronics for Your Needs</h1>
          <p className="lead">Find the latest gadgets and accessories.</p>
          <Link to={"/products"} className="btn btn-warning btn-lg">Shop Now</Link>
        </div>
      </header>
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-4">Featured Products</h2>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
              <div className="card">
                <img src={Gaming_Laptop} className="card-img-top" alt="Gaming Laptop" style={{ paddingLeft: "34px", width: "fit-content" }} />
                <div className="card-body">
                  <h5 className="card-title">Gaming Laptop</h5>
                  <p className="card-text">High-performance laptop for gaming and creative work.</p>
                  <Link to={"/products"} className="btn btn-primary btn-lg">Explore Products</Link>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <img src={SmartPhone} className="card-img-top" alt="Smartphone" />
                <div className="card-body">
                  <h5 className="card-title">Smartphone X</h5>
                  <p className="card-text">Capture stunning photos and videos with this new smartphone.</p>
                  <Link to="/products" className="btn btn-primary btn-lg">
                    Explore Products
                  </Link>

                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <img src={Wireless_Headphones} className="card-img-top" alt="Headphones" style={{ paddingLeft: "38px", width: "fit-content" }} />
                <div className="card-body">
                  <h5 className="card-title">Wireless Headphones</h5>
                  <p className="card-text">Experience crystal clear audio with these noise-cancelling headphones.</p>
                  <Link to="/products" className="btn btn-primary btn-lg">
                    Explore Products
                  </Link>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Home;
