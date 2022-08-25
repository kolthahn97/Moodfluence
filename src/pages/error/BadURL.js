import { Link, useLocation } from "react-router-dom"
import { Typography } from '@mui/material'
import { useSnackbar } from 'notistack'

export default function BadURL() {
    const { enqueueSnackbar } = useSnackbar()
    const location = useLocation()
    enqueueSnackbar(`'${location.pathname}' is not a valid URL`, { autoHideDuration: 8000, variant: 'error' })
    return (
        <Typography component='h1' variant='h6' sx={{m:2}}>
            The page '{location.pathname}' doesn't exist. <Link to='/'>Go home?</Link>
        </Typography>
    );
}
