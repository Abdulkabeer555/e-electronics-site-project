import React from 'react';
import useGen from '../hooks/useGen';

function ContactUs() {

  const { login } = useGen()
  
  function check(){
  if (!login) {
      alert("Please sign in first.");
      return;
    }
  }
  return (
    
    <div className=" min-h-screen" style={{backgroundColor: 'lightgray'}}>
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-4">Contact Us</h2>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="card  border-secondary">
                <div className="card-body p-4">
                  <p className="text-center">Have a question or need assistance? Feel free to contact us using the form below.</p>
                  <form>
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">Your Name</label>
                      <input type="text" className="form-control" id="name" required />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">Email address</label>
                      <input type="email" className="form-control" id="email" required />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="message" className="form-label">Message</label>
                      <textarea className="form-control" id="message" rows="5" required></textarea>
                    </div>
                    <div className="d-grid">
                      <button onClick={check} type="submit" className="btn btn-primary">Submit</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactUs;
