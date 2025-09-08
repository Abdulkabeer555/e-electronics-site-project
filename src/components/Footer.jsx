import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-dark text-white pt-5 pb-4 mt-5">
      <div className="container text-center text-md-start">
        <div className="row">

          <div className="col-md-4 mb-4">
            <h4 className="text-warning fw-bold"><a className="navbar-brand" onClick={() => navigate('/')} style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, cursor: 'pointer' }}>
              <span style={{ color: '#6a93cb', transition: 'color 0.3s ease' }}>E</span>
              <span style={{ color: '#a2c7e5', transition: 'color 0.3s ease' }}>-</span>
              <span style={{ color: '#6a93cb', transition: 'color 0.3s ease' }}>Electronics</span>
            </a></h4>
            <p className="text-light">
              Tech that powers your life — delivered fast. <br />
              Shop the latest devices, exclusive deals, and gear up for the future today.
            </p>
          </div>

          <div className="col-md-2 mb-4">
            <h5 className="mb-3" style={{ color: "rgba(250, 120, 120, 1)" }}>Explore</h5>
            <ul className="list-unstyled">
              <li><Link to={"/"} className="text-white text-decoration-none">Home</Link></li>
              <li><Link to={"/products"} className="text-white text-decoration-none">Products</Link></li>
              <li><Link to={"contact"} className="text-white text-decoration-none">Contact Us</Link></li>
            </ul>
          </div>

          <div className="col-md-3 mb-4">
            <h5 className="mb-3" style={{ color: "rgba(250, 120, 120, 1)" }}>Services</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white text-decoration-none">Warranty</a></li>
              <li><a href="#" className="text-white text-decoration-none">Custom Builds</a></li>
              <li><a href="#" className="text-white text-decoration-none">Delivery</a></li>
              <li><a href="#" className="text-white text-decoration-none">Returns</a></li>
            </ul>
          </div>

          <div className="col-md-3 mb-4">
            <h5 className="mb-3" style={{ color: "rgba(250, 120, 120, 1)" }}>Connect</h5>
            <p><i className="fas fa-envelope me-2"></i> akgct123@gmail.com</p>
            <p><i className="fas fa-phone me-2"></i> +92 323 3266296</p>
            <div className="d-flex gap-3 mt-3 justify-content-center justify-content-md-start">
              <a href="https://www.youtube.com" className='text-white' target="_blank"> <i class="fa-brands fa-youtube"></i></a>
              <a href="https://www.linkedin.com/in/abdul-kabeer-developer" className='text-white' target="_blank"> <i
                class="fa-brands fa-linkedin"></i></a>
              <a href="https://www.facebook.com" className='text-white' target="_blank"><i class="fa-brands fa-facebook"></i></a>
              <a href="https://www.instagram.com" className='text-white' target="_blank"><i class="fa-brands fa-instagram"></i></a>
            </div>
          </div>
        </div>

        <hr className="border-light" />
        <p className="text-center small text-muted mb-0">
          &copy; 2025 All rights reserved by <a className="navbar-brand" onClick={() => navigate('/')} style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, cursor: 'pointer', fontSize: "15px" }}>
            <span style={{ color: '#6a93cb', transition: 'color 0.3s ease' }}>E</span>
            <span style={{ color: '#a2c7e5', transition: 'color 0.3s ease' }}>-</span>
            <span style={{ color: '#6a93cb', transition: 'color 0.3s ease' }}>Electronics</span></a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
