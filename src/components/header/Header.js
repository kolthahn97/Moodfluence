import MenuIcon from '@mui/icons-material/Menu'
import {
	AppBar,
	Button,
	IconButton,
	Menu,
	MenuItem,
	Toolbar,
	Typography,
} from '@mui/material'
import UserAvatar from 'components/avatar/UserAvatar'
import SideMenu from 'components/sideMenu/SideMenu'
import { getAuth, signOut } from 'firebase/auth'
import { useSnackbar } from 'notistack'
import * as React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import styles from './Header.module.scss'

export default function Header({ user, pathways, children }) {
	const navigate = useNavigate()
	const [openSide, setOpenSide] = useState(false)
	const [anchorEl, setAnchorEl] = useState(null)
	const { enqueueSnackbar } = useSnackbar()

	const handleMenu = (event) => {
		setAnchorEl(event.currentTarget)
	}

	const handleClose = () => {
		setAnchorEl(null)
	}

	const logout = () => {
		const auth = getAuth()
		signOut(auth)
			.then(() => {
				// Sign-out successful.
				enqueueSnackbar('You have been signed out.', {
					autoHideDuration: 8000,
					variant: 'success',
				})
				navigate('/login')
			})
			.catch((error) => {
				// An error happened.
				enqueueSnackbar('There was a problem signing you out.', {
					autoHideDuration: 8000,
					variant: 'error',
				})
			})
	}

	return (
		<>
			<SideMenu menuIsOpen={openSide} setIsOpen={setOpenSide} pathways={pathways} />
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
					{user ? (
						<IconButton
							size='large'
							aria-label={`${user?.displayName}'s Account`}
							aria-controls='menu-appbar'
							aria-haspopup='true'
							onClick={handleMenu}
							color='inherit'
						>
							<UserAvatar user={user} />
						</IconButton>
					) : (
						<>
							<Button color='inherit' href='/register'>
								Sign Up
							</Button>
							<Button color='inherit' href='/login'>
								Login
							</Button>
						</>
					)}
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
						<MenuItem
							onClick={() => {
								handleClose()
								navigate('profile')
							}}
						>
							Profile
						</MenuItem>
						<MenuItem
							onClick={() => {
								handleClose()
								logout()
							}}
						>
							Sign Out
						</MenuItem>
					</Menu>
				</Toolbar>
			</AppBar>
			{children}
		</>
	)
}
