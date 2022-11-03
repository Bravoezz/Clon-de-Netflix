import React from "react";
import {Routes, Route} from 'react-router-dom';

//import any pages
import Profile from "./Pages/Profile.js";
import Home from './Pages/Home.js';
import Paypal from "./Pages/Paypal.js";
import SignUp from "./Pages/SignUp.js";
import Login from "./Pages/Login.js";

// import styles app
import './App.css';



function App() {
  return (
    <div className="App">
     
    <Routes>
      <Route exact path="/" element={ <Login nombre={'cositas'}/>}/>
      <Route path="/home" element={<Home />}/>
      <Route path="/paypal" element={<Paypal />}/>
      <Route path="/profile" element={<Profile />}/>
      <Route path="/singup" element={<SignUp />}/>  
    </Routes>
    </div>
  );
}

export default App;
