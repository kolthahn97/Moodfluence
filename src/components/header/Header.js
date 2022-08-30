import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import SideMenu from 'components/sideMenu/SideMenu';
import { useState, useEffect } from 'react';
import { Menu, MenuItem } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import { getAuth, signOut } from 'firebase/auth';
import styles from './Header.module.scss'

const pagesToIgnore = [
  '/login',
  '/register',
]

export default function Header({user}) {
  const location = useLocation()
  const navigate = useNavigate()
  const [ openSide, setOpenSide ] = useState(false)
  const [ anchorEl, setAnchorEl ] = useState(null)
  const [ pageName, setPageName ] = useState(location.pathname)
  const { enqueueSnackbar } = useSnackbar()

  useEffect(() => {
    setPageName(location.pathname)
  }, [location.pathname])

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  }

  const handleClose = () => {
    setAnchorEl(null);
  }

  const logout = () => {
    const auth = getAuth()
    signOut(auth).then(() => {
      // Sign-out successful.
      enqueueSnackbar('You have been signed out.', { autoHideDuration: 8000, variant: 'success' })
      navigate('login')
    }).catch((error) => {
      // An error happened.
      enqueueSnackbar('There was a problem signing you out.', { autoHideDuration: 8000, variant: 'error' })
    })
  }

  return (
    <>
      {!pagesToIgnore.includes(pageName) &&
        <>
          <SideMenu menuIsOpen={openSide} setIsOpen={setOpenSide} />
          <AppBar position='static'>
            <Toolbar>
              <IconButton
                size='large'
                edge='start'
                color='inherit'
                aria-label='menu'
                sx={{ mr: 2 }}
                onClick={() => setOpenSide(true)}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant='h6' component='h1' className={styles.name}>
                Moodfluence
              </Typography>
              {user ? 
                <IconButton
                  size='large'
                  aria-label={`${user.displayName}'s Account`}
                  aria-controls='menu-appbar'
                  aria-haspopup='true'
                  onClick={handleMenu}
                  color='inherit'
                >
                  <AccountCircle />
                </IconButton> 
                  :
                <Button color='inherit' href='login'>Login</Button>
              }
              <Menu
                id='menu-appbar'
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={() => {
                  handleClose()
                  navigate('profile')
                }}>
                  Profile
                </MenuItem>
                <MenuItem onClick={() => {
                  handleClose() 
                  logout()
                }}>
                  Sign Out
                </MenuItem>
              </Menu>
            </Toolbar>
          </AppBar>
        </> 
      }
    </>
  );
}
