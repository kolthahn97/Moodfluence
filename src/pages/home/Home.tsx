import TrackerCalendar from 'src/components/tracker/TrackerCalendar'
import { Container, Grid, Stack } from '@mui/material'
import { User } from 'firebase/auth'
import CalendarSideMenu, {
	Calendar,
} from 'src/components/calendar/CalendarSideMenu'

interface HomeProps {
	user: User | null
	calendar: Calendar
}

export default function Home({ user, calendar }: HomeProps) {
	return (
		<Grid container sx={{ height: '100%' }}>
			<Grid item sx={{ display: { xs: 'none', lg: 'inline' }, height: '100%' }} xs={3.5}>
				<CalendarSideMenu calendar={calendar} />
			</Grid>
			<Grid item xs={12} lg={8.5}>
				<Grid item>
					{user?.displayName ? 'HELLO ' + user?.displayName : 'Who are you?'}
				</Grid>
				<TrackerCalendar calendar={calendar} />
			</Grid>
		</Grid>
	)
}
