import React from 'react';
import { Link } from 'react-router-dom';

function ProductsList({ products, onViewDetails, showSuccessMessage }) {
  return (
    <section className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">All Products</h2>
        {showSuccessMessage && (
          <div className="alert alert-success text-center position-fixed top-0 start-50 translate-middle-x mt-3 shadow-lg" style={{ zIndex: 1000 }}>
            Product added to cart!
          </div>
        )}
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
          {products.map((product) => (
            <div className="col" key={product.id}>
              <div className="card h-100 d-flex flex-column rounded-lg shadow-sm transition-transform duration-300 hover:scale-105">
                <img src={product.image} className="card-img-top w-full h-48 object-cover rounded-t-lg" alt={product.name} />
                <div className="card-body d-flex flex-column">
                  <div className="flex-grow">
                    <h5 className="card-title truncate">{product.name}</h5>
                    <p className="card-text mb-2">
                      <span className="fw-bold">${product.price.toFixed(2)}</span>
                    </p>
                  </div>
                  <button onClick={() => onViewDetails(product)} className="btn btn-primary mt-auto">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductsList;
