

import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage'; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<RegisterPage></RegisterPage>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/home" element={<HomePage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
// import './App.css';
// import { useEffect, useState } from 'react';
// import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
// import { auth } from "./firebase-config";

// function App() {

//   const[registerEmail, setRegisterEmail] = useState("");
//   const[registerPassword, setRegisterPassword] = useState("");
//   const[loginEmail, setLoginEmail] = useState("");
//   const[loginPassword, setLoginPassword] = useState("");

//   const [user, setUser] = useState({});
//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);
//     });
//     return () => unsubscribe();
//   }, []);
  

//   const register = async () => {
//     try{
//       const user = await createUserWithEmailAndPassword(
//         auth, 
//         registerEmail, 
//         registerPassword
//         );
//       console.log(user);
//     } catch (error) {
//       console.log(error.message);
//     }
//   };

//   const login = async () => {
//     try{
//       const user = await signInWithEmailAndPassword(
//         auth, 
//         loginEmail, 
//         loginPassword
//         );
//       console.log(user);
//     } catch (error) {
//       console.log(error.message);
//     }
//   };

//   const logout = async () => {
//     await signOut(auth);
//   };

//   return (
//     <div className="App">
//       <div>
//         <h3>Register User</h3>
//         <input 
//         placeholder="Enter Email"
//         onChange={(event) => {
//           setRegisterEmail(event.target.value);
//         }}
//         ></input>
//         <input 
//           placeholder="Enter password"
//          onChange={(event) => {
//           setRegisterPassword(event.target.value);
//         }}
//         ></input>
//         <button onClick={register}> Create User </button>
//       </div>
//       <div>
//         <h3>User Login</h3>
//         <input 
//           placeholder="Enter Email"
//           onChange={(event) => {
//             setLoginEmail(event.target.value);
//           }}
//           ></input>
//         <input 
//           placeholder="Enter password"
//           onChange={(event) => {
//             setLoginPassword(event.target.value);
//           }}
//           ></input>
//         <button onClick={login}> Login </button>
//       </div>

//       <h4> User logged in : </h4>
//       {user?.email}    

//       <button onClick={logout}>Sign out</button>
//     </div>
//   );
// }

// export default App;