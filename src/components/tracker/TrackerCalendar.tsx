import { Box, Container, Typography } from '@mui/material'
import moment from 'moment'
import Calendar from 'react-calendar'
import { Calendar as CalendarType } from 'src/components/calendar/CalendarSideMenu'
import './Calendar.scss'

interface TrackerCalendarProps {
	calendar: CalendarType
}

export default function TrackerCalendar({ calendar }: TrackerCalendarProps) {
	const { selectedDate, setSelectedDate, useView } = calendar
	const { view, setView } = useView

	const date = selectedDate.toDate()

	return (
		<Container className='calendar-container'>
			<Calendar
				onChange={(newDate: Date) =>
					setSelectedDate(moment(newDate || new Date()))
				}
				value={date}
			/>
			<Typography>Selected Date: {date.toDateString()}</Typography>
		</Container>
	)
}
