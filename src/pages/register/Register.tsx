import GoogleIcon from '@mui/icons-material/Google'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'
import FormControlLabel from '@mui/material/FormControlLabel'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import {
	createUserWithEmailAndPassword,
	deleteUser,
	updateProfile,
} from 'firebase/auth'
import { useSnackbar } from 'notistack'
import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import { errors } from 'src/components/helperFunctions'
import Copyright from 'src/components/login/Copyright'
import { firebaseAuth } from 'src/firebase-config'

import styles from './Register.module.scss'

export default function Register() {
	const { enqueueSnackbar } = useSnackbar()
	const navigate = useNavigate()

	const handleSubmit = (event: React.SyntheticEvent) => {
		event.preventDefault()
		const data = new FormData(event.currentTarget as HTMLFormElement)
		// TODO: Google Sign Registration
		// Email login
		createUserWithEmailAndPassword(
			firebaseAuth,
			data.get('email') as string,
			data.get('password') as string
		)
			.then((userCredential) => {
				const user = userCredential.user
				// Update the recent user with a their displayName
				updateProfile(user, {
					displayName: `${data.get('firstName')} ${data.get('lastName')}`,
				})
					.then(() => {
						// Successfully created and updated the user
						console.log(user)
						navigate('/')
					})
					.catch((error) => {
						// Delete the current user and error if displayName can't be updated
						errors(error.code, error.message, enqueueSnackbar)
						deleteUser(user)
							.then(() => {
								console.log('User deleted')
							})
							.catch((error) => {
								errors(error.code, error.message, enqueueSnackbar)
							})
					})
			})
			.catch((error) => {
				errors(error.code, error.message, enqueueSnackbar)
			})
	}

	return (
		<Container component='main' maxWidth='xs'>
			<CssBaseline />
			<Box className={styles.container} sx={{ mt: 8 }}>
				<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component='h1' variant='h5'>
					Sign up
				</Typography>
				<Box component='form' onSubmit={handleSubmit} sx={{ mt: 3 }}>
					<Grid container spacing={2}>
						<Grid item xs={12} sm={6}>
							<TextField
								autoComplete='given-name'
								name='firstName'
								required
								fullWidth
								id='firstName'
								label='First Name'
								autoFocus
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								required
								fullWidth
								id='lastName'
								label='Last Name'
								name='lastName'
								autoComplete='family-name'
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								required
								fullWidth
								id='email'
								label='Email Address'
								name='email'
								autoComplete='email'
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								required
								fullWidth
								name='password'
								label='Password'
								type='password'
								id='password'
								autoComplete='new-password'
							/>
						</Grid>
						<Grid item xs={12}>
							<FormControlLabel
								control={<Checkbox value='allowExtraEmails' color='primary' />}
								label='I want to receive inspiration, marketing promotions and updates via email.'
							/>
						</Grid>
					</Grid>
					<Button
						type='submit'
						fullWidth
						variant='contained'
						sx={{ mt: 3, mb: 2 }}
					>
						Sign Up
					</Button>
					<Button
						type='submit'
						fullWidth
						variant='outlined'
						startIcon={<GoogleIcon />}
						sx={{ mb: 2 }}
					>
						Sign up with Google
					</Button>
					<Grid container justifyContent='flex-end'>
						<Grid item>
							<Link href='/login' variant='body2'>
								Already have an account? Sign in
							</Link>
						</Grid>
					</Grid>
				</Box>
			</Box>
			<Copyright sx={{ mt: 5 }} />
		</Container>
	)
}
