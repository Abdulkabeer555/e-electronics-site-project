import React from 'react';
import Gaming_Laptop from '../../Public/assets/Images/gaming-laptop.jpg'
import SmartPhone from '../../Public/assets/Images/highendsmartphone.jpeg'
import Wireless_Headphones from '../../Public/assets/Images/headphone.png'
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
              <div className="card h-100 d-flex flex-column">
                <div style={{ display: "flex", justifyContent: "center", paddingTop: "1rem" }}>
                  <img
                    src={Gaming_Laptop}
                    className="card-img-top"
                    alt="Gaming Laptop"
                    style={{ width: "auto", maxWidth: "65%", height: "auto" }}
                  />
                </div>
                <div className="card-body d-flex flex-column justify-content-between">
                  <div>
                    <h5 className="card-title">Gaming Laptop</h5>
                    <p className="card-text">High-performance laptop for gaming and creative work.</p>
                  </div>
                  <Link to="/products" className="btn btn-primary btn-lg mt-3">
                    Explore Products
                  </Link>
                </div>
              </div>
            </div>


            <div className="col">
              <div className="card d-flex flex-column">
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", paddingTop: "1rem", height: "200px" }}>
                  <img
                    src={SmartPhone}
                    className="card-img-top"
                    alt="Smartphone"
                    style={{}}
                  />
                </div>
                <div className="card-body d-flex flex-column justify-content-between">
                  <div>
                    <h5 className="card-title">Smartphone X</h5>
                    <p className="card-text">Capture stunning photos and videos with this new smartphone.</p>
                  </div>
                  <Link to="/products" className="btn btn-primary btn-lg mt-3">
                    Explore Products
                  </Link>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card  d-flex flex-column">
                <div style={{ display: "flex", justifyContent: "center", paddingTop: "1rem" }}>
                  <img
                    src={Wireless_Headphones}
                    className="card-img-top"
                    alt="Wireless Headphones"
                    style={{ width: "auto", maxWidth: "76%", height: "auto" }}
                  />
                </div>
                <div className="card-body d-flex flex-column justify-content-between">
                  <div>
                    <h5 className="card-title">Wireless Headphones</h5>
                    <p className="card-text">Experience rich sound quality without the wires.</p>
                  </div>
                  <Link to="/products" className="btn btn-primary btn-lg mt-3">
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
