import React, { useState } from 'react';
import useGen from '../hooks/useGen';
import { useNavigate, Link } from 'react-router-dom';

export default function SignUp() {
    const [inputName, setInputName] = useState("");
    const [inputEmail, setInputEmail] = useState("");
    const [inputPwd, setInputPwd] = useState("");
    const { allUsers, setAllUsers } = useGen();
    const navigate = useNavigate();

    function Reg() {
        const newUser = {
            userName: inputName,
            userEmail: inputEmail,
            userPwd: inputPwd
        };
        allUsers.push(newUser);
        setAllUsers([...allUsers]);
        navigate("/signin");
    }

    return (
        <div className="min-vh-100" style={{ backgroundColor: 'lightgray' }}>
            <section className="py-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="card border-secondary">
                                <h2 className="text-center mb-4 pt-5">Create Account</h2>
                                <div className="card-body p-4">
                                    <form>
                                        <div className="mb-3">
                                            <label htmlFor="name" className="form-label">Full Name</label>
                                            <input type="text" className="form-control" id="name" value={inputName} onChange={(e) => setInputName(e.target.value)} />
                                        </div>

                                        <div className="mb-3">
                                            <label htmlFor="email" className="form-label">Email address</label>
                                            <input type="email" className="form-control" id="email" value={inputEmail} onChange={(e) => setInputEmail(e.target.value)} />
                                            <div id="emailHelp" className="form-text">
                                                We'll never share your email with anyone else.
                                            </div>
                                        </div>

                                        <div className="mb-3">
                                            <label htmlFor="password" className="form-label">Password</label>
                                            <input type="password" className="form-control" id="password" value={inputPwd} onChange={(e) => setInputPwd(e.target.value)} />
                                        </div>

                                        <div className="d-grid">
                                            <button type="button" onClick={Reg} className="btn btn-primary">
                                                Sign Up
                                            </button>
                                        </div>

                                        <div className="text-center mt-3">
                                            <p>Already have an account? <Link to="/signin">Sign In</Link></p>
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
