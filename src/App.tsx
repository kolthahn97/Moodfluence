import './App.scss'

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import Header from 'src/components/header/Header'
import { User } from 'firebase/auth'
import BadURL from 'src/pages/error/BadURL'
import Home from 'src/pages/home/Home'
import Login from 'src/pages/login/Login'
import Profile from 'src/pages/profile/Profile'
import Register from 'src/pages/register/Register'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export interface Pathway {
	path: string
	element: JSX.Element
	title: string
	icon: JSX.Element
}

export default function App({ user }: { user: User | null }) {
	const home = <Home user={user} />

	const pathways: Pathway[] = [
		{ path: '/home', element: home, title: 'Home', icon: <HomeOutlinedIcon /> },
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
