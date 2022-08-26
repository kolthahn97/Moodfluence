import './Register.scss'
import * as React from 'react'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import GoogleIcon from '@mui/icons-material/Google'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Copyright from 'components/login/Copyright'
import { loginErrors } from 'components/login/LoginConfig'
import { firebaseAuth } from 'firebase-config'
import { createUserWithEmailAndPassword, deleteUser, updateProfile } from 'firebase/auth'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { useSnackbar } from 'notistack'
import { useNavigate } from 'react-router-dom'

const theme = createTheme()

export default function Register() {
  const { enqueueSnackbar } = useSnackbar()
  const navigate = useNavigate()

  function errors(code, message) {
    console.log(code + " " + message)
    enqueueSnackbar(loginErrors[code] || message, { autoHideDuration: 8000, variant: 'error' })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    // TODO: Google Sign Registration
    // Email login
    createUserWithEmailAndPassword(firebaseAuth, data.get('email'), data.get('password')).then((userCredential) => {
      const user = userCredential.user
      // Update the recent user with a their displayName
      updateProfile(user, {
        displayName:data.get('displayName')
      }).then(() => {
        // Successfully created and updated the user
        console.log(user)
        navigate('/')
      }).catch((error) => {
        // Delete the current user and error if displayName can't be updated
        errors(error.code, error.message)
        deleteUser(user).then(() => {
          console.log('User deleted')
        }).catch((error) => {
          errors(error.code, error.message)
        });
      })
    }).catch((error) => {errors(error.code, error.message)});
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Sign up
          </Typography>
          <Box component='form' onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name='displayName'
                  label='Display Name'
                  id='displayName'
                  autoComplete='display-name'
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
                <Link href='login' variant='body2'>
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  )
}
