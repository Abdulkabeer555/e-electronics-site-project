import React from 'react';
import { useNavigate } from 'react-router-dom';

function Cart({ cartItems = [], onItemUpdate, onBackToProducts }) {
    const navigate = useNavigate()
    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };

    return (
        <section className="py-5">
            <div className="container">
                <h2 className="text-center mb-4">Your Shopping Cart</h2>
                {cartItems.length === 0 ? (
                    <div className="alert alert-info text-center">
                        Your cart is empty. Please add items to proceed.
                    </div>
                ) : (
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Product</th>
                                <th scope="col">Price</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Subtotal</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.name}</td>
                                    <td>${item.price.toFixed(2)}</td>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <button className="btn btn-sm btn-outline-secondary me-2" onClick={() => onItemUpdate(index, 'decrease')}>-</button>
                                            <span>{item.quantity}</span>
                                            <button className="btn btn-sm btn-outline-secondary ms-2" onClick={() => onItemUpdate(index, 'increase')}>+</button>
                                        </div>
                                    </td>
                                    <td>${(item.price * item.quantity).toFixed(2)}</td>
                                    <td><button className="btn btn-sm btn-danger" onClick={() => onItemUpdate(index, 'remove')}>Remove</button></td>
                                </tr>
                            ))}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colSpan="3" className="text-end"><strong>Total:</strong></td>
                                <td><strong>${calculateTotal()}</strong></td>
                                <td></td>
                            </tr>
                        </tfoot>
                    </table>
                )}
                <div className="d-flex justify-content-between mt-4">
                    <button onClick={()=> navigate('/products')} className="btn btn-primary ">
                        Continue Shopping
                    </button>
                    <button onClick={() => navigate('/checkout')} className="btn btn-success">
                        Checkout
                    </button>
                </div>

            </div>
        </section>
    );
}

export default Cart;
