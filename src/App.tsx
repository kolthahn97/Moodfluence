import './App.scss'

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import { User } from 'firebase/auth'
import moment, { Moment } from 'moment'
import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from 'src/components/header/Header'
import BadURL from 'src/pages/error/BadURL'
import Home from 'src/pages/home/Home'
import Login from 'src/pages/login/Login'
import Profile from 'src/pages/profile/Profile'
import Register from 'src/pages/register/Register'
import { Calendar, View, ViewLevel } from './components/calendar/CalendarSideMenu'

export interface Pathway {
	path: string
	element: JSX.Element
	title: string
	icon: JSX.Element
}

export default function App({ user }: { user: User | null }) {
	const [selectedDate, setSelectedDate] = useState<Moment>(moment())
	const [view, setView] = useState<ViewLevel>(ViewLevel.Month)
	const useView = {view, setView}
	
	const minDate = moment().subtract(12, 'M').startOf('month') // TODO: Change this to start of month BEFORE any available data
	const maxDate = moment().endOf('month')

	const calendar: Calendar = {
		selectedDate,
		setSelectedDate,
		minDate,
		maxDate,
		useView
	}
	
	const home = <Home user={user} calendar={calendar} />
		
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
