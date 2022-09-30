import './index.css'

import { ThemeProvider } from '@mui/material'
import { firebaseAuth } from 'firebase-config'
import { onAuthStateChanged } from 'firebase/auth'
import { SnackbarProvider } from 'notistack'
import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import { theme } from 'theme/MUI-Theme'

import App from './App'
import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Index />)

function Index() {
	const [user, setUser] = useState({})
	onAuthStateChanged(firebaseAuth, (currentUser) => {
		setUser(currentUser)
	})

	return (
		<ThemeProvider theme={theme}>
			<SnackbarProvider preventDuplicate>
				<App user={user} />
			</SnackbarProvider>
		</ThemeProvider>
	)
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
