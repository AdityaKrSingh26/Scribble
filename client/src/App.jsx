import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


// import components
import Login from './components/Login/Login.jsx'
import Signup from './components/Login/Signup.jsx'
import Home from './components/Home/Home.jsx'
import Notes from "./Components/Notes/Notes"


// import css
import "./App.css"
import { ForgetPassword } from './components/Login/ForgetPassword.jsx';
import { Home } from './reactQuery/pages/Home/Home.jsx';


function App() {
  return (
    <div>
      <Router>
        <Routes>

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgetPassword" element={<ForgetPassword />} />
          <Route path="/" element={<Home />} />


          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/home' element={<Home />} />
          <Route path='/notes' element={<Notes />} />


        </Routes>
      </Router>
    </div>
  );
}

export default App