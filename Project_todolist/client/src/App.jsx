'use client'
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from './Component/Home';
import YearlyTarget from './Component/YearlyTarget';
import MonthlyTarget from './Component/MonthlyTarget';
import ContactUs from './Component/ContactUs'
import Signin_page from './Component/Signin_page'
import DailyTarget from './Component/DailyTarget';
import AboutUs from './Component/AboutUs';

function App() {
  return (
    <>
    <div className="app">
     <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/YearlyTarget" element={<YearlyTarget />} />
        <Route path="/MonthlyTarget" element={<MonthlyTarget/>} />
        <Route path="/DailyTarget" element={<DailyTarget/>} />
        <Route path="/contactus" element={<ContactUs/>} />
        <Route path="/signin_page" element={<Signin_page />} />
        <Route path="/aboutus" element={<AboutUs />} />
       </Routes> 
     </Router>
     </div>
    </>
  )
}

export default App;
