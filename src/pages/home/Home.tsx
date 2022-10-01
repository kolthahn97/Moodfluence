import { Grid } from '@mui/material'
import DateSelectingCalendar from 'src/components/calendar/DateSelectingCalendar'
import { User } from 'firebase/auth'

interface HomeProps {
	user: User | null
}

export default function Home({ user }: HomeProps) {
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
