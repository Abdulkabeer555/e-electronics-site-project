import React, { useState } from 'react';

function Checkout() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        address: '',
        city: '',
        zip: '',
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Order placed:', formData);
        alert('Order placed successfully!');
    };

    return (
        <section className="py-5">
            <div className="container">
                <h2 className="text-center mb-4">Checkout</h2>
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="fullName" className="form-label">Full Name</label>
                                <input type="text" className="form-control" id="fullName" required value={formData.fullName} onChange={handleChange} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="email" required value={formData.email} onChange={handleChange} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="address" className="form-label">Shipping Address</label>
                                <input type="text" className="form-control" id="address" required value={formData.address} onChange={handleChange} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="city" className="form-label">City</label>
                                <input type="text" className="form-control" id="city" required value={formData.city} onChange={handleChange} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="zip" className="form-label">Zip Code</label>
                                <input type="text" className="form-control" id="zip" required value={formData.zip} onChange={handleChange} />
                            </div>
                            <div className="d-grid">
                                <button type="submit" className="btn btn-success btn-lg">Place Order</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Checkout;
