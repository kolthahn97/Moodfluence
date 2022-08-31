import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import Register from 'pages/register/Register'
import Login from 'pages/login/Login'
import reportWebVitals from './reportWebVitals'
import BadURL from 'pages/error/BadURL'
import { theme, darkTheme } from 'theme/MUI-Theme'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { SnackbarProvider } from 'notistack'
import { onAuthStateChanged } from 'firebase/auth'
import { firebaseAuth } from 'firebase-config'
import { ThemeProvider } from '@mui/material'
import Profile from 'pages/profile/Profile'
import Header from 'components/header/Header'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Index />
);

function Index() {
  const [ user, setUser ] = useState({})
  onAuthStateChanged(firebaseAuth, (currentUser) => {
    setUser(currentUser)
  })

  const home = <App user={user} />

  return <ThemeProvider theme={theme}>
      <SnackbarProvider preventDuplicate>
        <BrowserRouter>
          <Header user={user} />  
          <Routes>
            <Route path='/' element={home} />
            <Route path='home' element={home} />
            <Route path='register' element={<Register />} />
            <Route path='login' element={<Login />} />
            <Route path='profile' element={<Profile user={user} />} />
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
