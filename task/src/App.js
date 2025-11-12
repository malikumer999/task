import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import Home from './Pages/Home';
import Getintouch from './Pages/Getintouch';
function App() {
  return (
    <Router>
      <Routes>
      <Route path='/' element={<Home/>}/>
<Route path='/getintouch' element={<Getintouch/>}/>
      </Routes>
    </Router>
  )
}

export default App
