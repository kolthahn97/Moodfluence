import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'

export interface LoginError {
    [key: string]: JSX.Element
}

export const loginErrors: LoginError = {
    "auth/email-already-in-use":<Typography>Email already in use. Did you mean to <Link href='/login' color="inherit" underline="hover">LOGIN</Link>?</Typography>,
    "auth/too-many-requests":<Typography>Too many requests for account creation.  Please Wait...</Typography>,
    "auth/invalid-email":<Typography>The email is invalid</Typography>,
}

