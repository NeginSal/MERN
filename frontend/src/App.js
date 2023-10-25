import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";

//components
import Home from './pages/Home'
import Navbar from './components/Navbar';
import EditTodo from './components/EditTodo'
import Login from './pages/Login';
import Signup from './pages/Signup';
import { useAuthContext } from './hooks/useAuthContext';


function App() {
  const { user } = useAuthContext()

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={user ? <Home /> : <Navigate to="/login" />} />
        <Route path='/edit/:id' element={<EditTodo />} />
        <Route path='/login' element={!user ? <Login /> : <Navigate to="/" />} />
        <Route path='/signup' element={!user ? <Signup /> : <Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
