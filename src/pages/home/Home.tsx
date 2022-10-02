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
	const { useView } = calendar
	const { view } = useView

	return (
		<Grid container sx={{ height: '100%' }}>
			<Grid item sx={{ display: { xs: 'none', lg: 'inline' }, height: '100%' }} xs={3}>
				<CalendarSideMenu calendar={calendar} />
			</Grid>
			<Grid item xs={12} lg={9}>
				<Grid item>
					{user?.displayName ? `HELLO ${user?.displayName} with view ${view}` : 'Who are you?'}
				</Grid>
				<TrackerCalendar calendar={calendar} />
			</Grid>
		</Grid>
	)
}
