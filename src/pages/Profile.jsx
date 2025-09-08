import React, { useEffect } from 'react'
import useGen from '../hooks/useGen'
import { useNavigate } from 'react-router-dom';


export default function Profile() {

  const { loginUser, login } = useGen();
  const navigate = useNavigate();

  useEffect(() => {
    if (!login) {
      navigate("/")
    }
  }, []);


  return (
    <div>

      <h1 className="text-center my-5">Your Profile {loginUser.userName}</h1>

    </div>
  )
}
