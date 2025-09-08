import React from 'react';
import useGen from '../hooks/useGen';
import { useNavigate } from 'react-router-dom';

function ProductDetail({ product, onBack, onAddToCart }) {
  const { login } = useGen();

  if (!product) {
    return <div className="text-center py-5">Product not found.</div>;
  }

  const navigate = useNavigate()
  const handleAdd = () => {
    if (!login) {
      alert("Please sign in first.");
      navigate("/signin")
      return;
    }
    onAddToCart(product);
  };

  return (
    <section className="py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card shadow-lg p-4">
              <div className="row">
                <div className="col-md-6">
                  <img src={product.image} className="img-fluid rounded-lg shadow-sm mb-3" alt={product.name} />
                </div>
                <div className="col-md-6 d-flex flex-column justify-content-center">
                  <h2 className="card-title fw-bold mb-3">{product.name}</h2>
                  <p className="lead text-primary fw-bold">${product.price.toFixed(2)}</p>
                  <p className="card-text text-muted">
                    This is a detailed description of the {product.name}.
                  </p>
                  <div className="d-grid gap-2 mt-4">
                    <button
                      onClick={handleAdd}
                      className="btn btn-primary btn-lg rounded-pill shadow-sm">
                      Add to Cart
                    </button>
                    <button onClick={onBack} className="btn btn-outline-secondary rounded-pill">
                      Back to Products
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetail;

// import React from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// // import useGen from '../hooks/useGen'; // if you're using context for product data (optional)

// function ProductDetail({ products, onAddToCart }) {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const product = products.find((p) => p.id === id);

//   if (!product) {
//     return <div className="text-center py-5">Product not found.</div>;
//   }

//   return (
//     <section className="py-5">
//       <div className="container">
//         <div className="row justify-content-center">
//           <div className="col-lg-8">
//             <div className="card shadow-lg p-4">
//               <div className="row">
//                 <div className="col-md-6">
//                   <img src={product.image} className="img-fluid" alt={product.name} />
//                 </div>
//                 <div className="col-md-6">
//                   <h2>{product.name}</h2>
//                   <p className="lead text-primary fw-bold">${product.price.toFixed(2)}</p>
//                   <p>
//                     This is a detailed description of the {product.name}.
//                   </p>
//                   <button onClick={() => onAddToCart(product)} className="btn btn-primary me-2">Add to Cart</button>
//                   <button onClick={() => navigate('/products')} className="btn btn-outline-secondary">Back</button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default ProductDetail;

