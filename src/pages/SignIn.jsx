import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
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

            const found = allUsers.find((items) => { return items.userEmail == inputEmail && items.userPwd == inputPwd });
            
            if (found) {
                setLoginUser(found);
                navigate("/profile");
                setLogin(true);
            }
            else {
               console.log("No Account Is Login")
            }
        } else {
            console.log("No cookie found");
        }
    }, []);


    function login() {
        const found = allUsers.find((items) => { return items.userEmail == inputEmail && items.userPwd == inputPwd });
        if (found) {
            setLoginUser(found);
            navigate("/");
            setLogin(true);
            Cookies.set('loginData', JSON.stringify({ inputEmail, inputPwd }));
            console.log("Cookies Baked");
        }
        else {
            alert("Invalid Email Or Password")
        }

    }


    return (
        <div className='border border-primary rounded m-auto px-5 py-5 my-5' style={{ width: "400px" }}>
            <p className="h3 text-center mb-5">SignIn</p>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={inputEmail} onChange={(e) => { setInputEmail(e.target.value) }} />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" value={inputPwd} onChange={(e) => { setInputPwd(e.target.value) }} />
            </div>
            <button onClick={login} className="btn btn-primary">Submit</button>
            <p><Link to={"/signup"}>Dnt have An Account ?</Link> </p>
        </div>
    )
}
