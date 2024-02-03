import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../firebase-config";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";


const RegisterPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/login'); // Redirect to login page after successful registration
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <h3>Register User</h3>
      <input 
        placeholder="Enter Email"
        onChange={(event) => setEmail(event.target.value)}
      ></input>
      <input 
        placeholder="Enter password"
        onChange={(event) => setPassword(event.target.value)}
        type="password"
      ></input>
      <br></br>
      <button onClick={handleRegister}> Create User </button>
      <br></br>
      <Link to={`/login`}>
        <button> Already have an account? Login </button>
      </Link>
    </div>
  );
}

export default RegisterPage;
