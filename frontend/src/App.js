import React from 'react';
import { Routes, Route } from "react-router-dom";

//components
import Home from './pages/Home'
import Navbar from './components/Navbar';
import EditTodo from './components/EditTodo'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/edit/:id' element={<EditTodo />} />
      </Routes>
    </>
  );
}

export default App;
