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
import { firebaseAuth } from 'firebase-config'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { useNavigate } from 'react-router-dom'
import { loginErrors } from 'components/login/LoginConfig'
import { useSnackbar } from 'notistack'

const theme = createTheme()

export default function SignIn() {
  const { enqueueSnackbar } = useSnackbar()
  const navigate = useNavigate()

  function errors(code, message) {
    console.log(code + " " + message)
    enqueueSnackbar(loginErrors[code] || message, { autoHideDuration: 8000, variant: 'error' })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    // TODO: Google Sign in
    signInWithEmailAndPassword(firebaseAuth, data.get('email'), data.get('password')).then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user)
      navigate('/')
    }).catch((error) => {
      errors(error.code, error.message)
    });
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
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
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Button
              type='submit'
              fullWidth
              variant='outlined'
              startIcon={<GoogleIcon />}
              sx={{ mb: 2 }}
            >
              Sign in with Google
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="register" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  )
}