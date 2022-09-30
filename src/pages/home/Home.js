import { Grid } from '@mui/material'
import DateSelectingCalendar from 'components/calendar/DateSelectingCalendar'

export default function Home({ user }) {
	return (
		<Grid container>
			<Grid item sx={{ display: { xs: 'none', lg: 'inline' } }}>
				<DateSelectingCalendar />
			</Grid>
			<Grid item>
				{user?.displayName ? 'HELLO ' + user?.displayName : 'Who are you?'}
			</Grid>
		</Grid>
	)
}
