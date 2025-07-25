
import './App.css';
import React from 'react';
import Home from './Components/Home';
import { Routes, Route, Router } from "react-router"
import Test from './Test/Test';
import Login from './Components/Login/Login';




function App() {

  return (
    <div >
       <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
    </div>
  );
}

export default App;
