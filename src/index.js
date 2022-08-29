import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import Register from 'pages/register/Register'
import Login from 'pages/login/Login'
import reportWebVitals from './reportWebVitals'
import BadURL from 'pages/error/BadURL'
import { theme, darkTheme } from 'theme/MUI-Theme'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { SnackbarProvider } from 'notistack'
import { onAuthStateChanged } from 'firebase/auth'
import { firebaseAuth } from 'firebase-config'
import { ThemeProvider } from '@mui/material'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Index />
);

function Index() {
  const [ user, setUser ] = useState({})
  onAuthStateChanged(firebaseAuth, (currentUser) => {
    setUser(currentUser)
  })
  return <ThemeProvider theme={theme}>
      <SnackbarProvider preventDuplicate>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<App user={user} />} />
            <Route path='/home' element={<App />} />
            <Route path='register' element={<Register />} />
            <Route path='login' element={<Login />} />
            <Route path='*' element={<BadURL />} />
          </Routes>
        </BrowserRouter>
    </SnackbarProvider>
  </ThemeProvider>
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
