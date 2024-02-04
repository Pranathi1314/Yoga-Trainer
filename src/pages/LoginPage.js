import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../firebase-config";
import { useNavigate } from 'react-router-dom';
import './LoginPage.css'; // Import your CSS file

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/home'); // Redirect to home page after successful login
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="login-container">
      <h3>User Login</h3>
      <input 
        className="input-field"
        placeholder="Enter Email"
        onChange={(event) => setEmail(event.target.value)}
      ></input>
      <input 
        className="input-field"
        placeholder="Enter password"
        onChange={(event) => setPassword(event.target.value)}
        type="password"
      ></input>
      <button className="login-button" onClick={handleLogin}> Login </button>
    </div>
  );
}

export default LoginPage;








// import React, { useState } from 'react';
// import { signInWithEmailAndPassword } from 'firebase/auth';
// import { auth } from "../firebase-config";
// import { useNavigate } from 'react-router-dom';

// const LoginPage = () => {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = async () => {
//     try {
//       await signInWithEmailAndPassword(auth, email, password);
//       navigate('/home'); // Redirect to home page after successful login
//     } catch (error) {
//       console.log(error.message);
//     }
//   };

//   return (
//     <div>
//       <h3>User Login</h3>
//       <input 
//         placeholder="Enter Email"
//         onChange={(event) => setEmail(event.target.value)}
//       ></input>
//       <input 
//         placeholder="Enter password"
//         onChange={(event) => setPassword(event.target.value)}
//         type="password"
//       ></input>
//       <button onClick={handleLogin}> Login </button>
//     </div>
//   );
// }

// export default LoginPage;
