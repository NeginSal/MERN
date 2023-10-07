import React from 'react';
import { Routes, Route } from "react-router-dom";

//components
import Home from './pages/Home'
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
