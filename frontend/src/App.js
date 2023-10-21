import React from 'react';
import { Routes, Route } from "react-router-dom";

//components
import Home from './pages/Home'
import Navbar from './components/Navbar';
import EditTodo from './components/EditTodo'
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/edit/:id' element={<EditTodo />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
