import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { TodosContextProvider } from './context/TodoContext';
import { AuthContextProvider } from './context/AuthContext';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <TodosContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </TodosContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);

