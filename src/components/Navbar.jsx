import React from 'react';
import "./Navbar.css";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useGen from "../hooks/useGen"
import Cookies from 'js-cookie';


export default function Navbar(props) {
  const navigate = useNavigate();
  const location = useLocation()
  const isActive = (path) => location.pathname === path;

  const { login, setLogin } = useGen();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" onClick={() => navigate('/')} style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, cursor: 'pointer' }}>
          <span style={{ color: '#6a93cb', transition: 'color 0.3s ease' }}>E</span>
          <span style={{ color: '#a2c7e5', transition: 'color 0.3s ease' }}>-</span>
          <span style={{ color: '#6a93cb', transition: 'color 0.3s ease' }}>Electronics</span>
        </a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">

          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                to={"/"}
                className={`nav-link ${isActive('/') ? 'active' : ''}`}
                style={{ cursor: 'pointer' }}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to={"/products"}
                className={`nav-link ${isActive('/products') ? 'active' : ''}`}
                style={{ cursor: 'pointer' }}>
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
                style={{ cursor: 'pointer' }}>
                Contact
              </Link>
            </li>
          </ul>

          <div className="d-flex align-items-center">
          <Link to="/cart" className={`btn btn-outline-light me-2 ${isActive('/cart') ? 'active' : ''}`}style={{ cursor: 'pointer' }}>Cart</Link>     
                 
    {login === false ? (
              <div className="d-flex">
                <button onClick={() => navigate('/signin')} className="btn btn-success mx-2">Sign In</button>
                <button onClick={() => navigate('/signup')} className="btn btn-primary mx-2">Sign Up</button>
              </div>
            ) : (
              <button onClick={() => {
                setLogin(false);
                navigate("/signin");
                Cookies.remove('loginData');
                console.log("Cookies Deleted");
              }} className="btn btn-danger mx-2">
                Logout
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
