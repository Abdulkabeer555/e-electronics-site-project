import React, { useState } from 'react'
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
        }
        allUsers.push(newUser);
        setAllUsers([...allUsers])
        navigate("/signin");
    }

    return (
        <div className='border border-primary rounded m-auto px-5 py-5 my-5' style={{ width: "400px" }}>
            <p className="h3 text-center mb-5">SignUp</p>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Full Name</label>
                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={inputName} onChange={(e) => { setInputName(e.target.value) }} />
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={inputEmail} onChange={(e) => { setInputEmail(e.target.value) }} />
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" value={inputPwd} onChange={(e) => { setInputPwd(e.target.value) }} />
            </div>
            <button onClick={Reg} class="btn btn-primary">Submit</button>
            <p><Link to={"/"}>Have An Account ?</Link> </p>
        </div>
    )
}
