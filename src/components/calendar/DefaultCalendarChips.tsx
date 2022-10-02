import { Chip, Container, Stack } from '@mui/material'
import { Calendar, ViewLevel } from './CalendarSideMenu'

interface DefaultCalendarChipsProps {
	calendar: Calendar
}

export default function DefaultCalendarChips({
	calendar,
}: DefaultCalendarChipsProps) {
	const { useView } = calendar
	const { view, setView } = useView

	return (
		<Container sx={{ py: 2 }}>
			<Stack
				direction='row'
				justifyContent='space-between'
				alignItems='center'
			>
				<Chip
					label='Day'
					onClick={() => setView(ViewLevel.Day)}
					variant={view === ViewLevel.Day ? 'filled' : 'outlined'}
					color='primary'
				/>
				<Chip
					label='Week'
					onClick={() => setView(ViewLevel.Week)}
					variant={view === ViewLevel.Week ? 'filled' : 'outlined'}
					color='primary'
				/>
				<Chip
					label='Month'
					onClick={() => setView(ViewLevel.Month)}
					variant={view === ViewLevel.Month ? 'filled' : 'outlined'}
					color='primary'
				/>
				<Chip
					label='Year'
					onClick={() => setView(ViewLevel.Year)}
					variant={view === ViewLevel.Year ? 'filled' : 'outlined'}
					color='primary'
				/>
			</Stack>
		</Container>
	)
}
