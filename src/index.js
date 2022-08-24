import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import Register from 'pages/register/Register'
import Login from 'pages/login/Login'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { SnackbarProvider } from 'notistack'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <SnackbarProvider preventDuplicate>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='register' element={<Register />} />
        <Route path='login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  </SnackbarProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
