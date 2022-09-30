import './App.scss'

import Header from 'components/header/Header'
import BadURL from 'pages/error/BadURL'
import Home from 'pages/home/Home'
import Login from 'pages/login/Login'
import Profile from 'pages/profile/Profile'
import Register from 'pages/register/Register'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

export default function App({ user }) {
	const home = <Home user={user} />

	const pathways = [
		{path:'/home', element:home, title:'Home', icon:<HomeOutlinedIcon />}
	]

	return (
		<BrowserRouter>
			<Header user={user} pathways={pathways}>
				<Routes>
					{pathways.map((pathway) => {
						return <Route path={pathway.path} element={home} />
					})}
					<Route path='/' element={home} />
					<Route path='/register' element={<Register />} />
					<Route path='/login' element={<Login />} />
					<Route path='/profile' element={<Profile user={user} />} />
					<Route path='/*' element={<BadURL />} />
				</Routes>
			</Header>
		</BrowserRouter>
	)
}
