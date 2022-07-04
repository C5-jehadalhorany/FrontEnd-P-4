import './App.css';
import Register from './components/Register';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import { Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from 'react'
import React, { createContext } from "react";
import Asc from './components/getAllcars/getAllCars';
import Details from './components/details/details';
import Category from './components/category';



export const tokenContext = createContext()

function App() {
  const [token, setToken] = useState(localStorage.getItem("token") || "") // -> get it from localStorage
  const [message, setMessage] = useState("")
  const [isLoggedIn, setIsLoggedIn] = useState(token ? true : false); // isToken ? true : false
  const [carname,setCarname]=useState("")
  const [newSearch,setNewSearch]=useState("")
  const [dropdown,setDropdown]=useState("")


  return (
    <div className="App">
      <div allcont>
      <tokenContext.Provider value={{ isLoggedIn, setIsLoggedIn, token, setToken, message, setMessage ,carname,setCarname,newSearch,setNewSearch,dropdown,setDropdown}}>

        {/* <h1>جبت العيد للسيارات</h1> */}
        <Navbar className="Navbar" />
        <Routes>


          <Route path='/' element={<div><h1 className='nameOfBroject'>The best for rent cars</h1><Asc /></div>} />

          <Route path='/Register' element={<Register />} />

          <Route path='/Login' element={ <Login />}  />

          <Route path='/Dashboard' element={<div className='divimg'><Dashboard /><Asc /></div>} />

          <Route path='/Dashboard/:id' element={<Details />} />
          
          <Route path='/Dashboard/:category' element={<Category />} />

        </Routes>


      </tokenContext.Provider>
      </div>
    </div>
  );
}

export default App;

{/* <Route path="/profile/:id" element={<Profile />} /> */ } // بدي أستخدم هاض الأشي عشان أنتقل من صفحة ل صفحه ثانيه عن طريق الأي دي الي رح يجيني من المعرف