import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useGen from '../hooks/useGen';
import Cookies from 'js-cookie';

export default function SignIn() {
    const [inputEmail, setInputEmail] = useState("");
    const [inputPwd, setInputPwd] = useState("");
    const { allUsers, setLogin, setLoginUser } = useGen();
    const navigate = useNavigate();

    useEffect(() => {
        const data = Cookies.get('loginData');

        if (data) {
            const { inputEmail, inputPwd } = JSON.parse(data);

            const found = allUsers.find(user => user.userEmail === inputEmail && user.userPwd === inputPwd);

            if (found) {
                setLoginUser(found);
                setLogin(true);
                navigate("/profile");
            } else {
                console.log("No account matched with cookie data");
            }
        }
    }, []);

    function login() {
        const found = allUsers.find(user => user.userEmail === inputEmail && user.userPwd === inputPwd);
        if (found) {
            setLoginUser(found);
            setLogin(true);
            Cookies.set('loginData', JSON.stringify({ inputEmail, inputPwd }));
            navigate("/");
        } else {
            alert("Invalid Email or Password");
        }
    }

    return (
        <div className="min-vh-100 d-flex align-items-center justify-content-center" style={{ backgroundColor: 'lightgray' }}>
            <section className="py-5 w-100">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="card border-secondary shadow">
                                <div className="card-body p-4">
                                    <h2 className="text-center mb-4">Sign In</h2>
                                    <form>
                                        <div className="mb-3">
                                            <label htmlFor="email" className="form-label">Email Address</label>
                                            <input type="email" className="form-control" id="email" value={inputEmail} onChange={(e) => setInputEmail(e.target.value)} required /> 
                                            <div className="form-text">We'll never share your email with anyone else.</div>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="password" className="form-label">Password</label>
                                            <input type="password" className="form-control" id="password" value={inputPwd} onChange={(e) => setInputPwd(e.target.value)} required />
                                        </div>
                                        <div className="d-grid gap-2">
                                            <button type="button" onClick={login} className="btn btn-primary">Login</button>
                                        </div>
                                    </form>
                                    <p className="mt-3 text-center">
                                        Don't have an account? <Link to="/signup">Sign Up</Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
