import { Container, Typography } from '@mui/material'
import Calendar from 'react-calendar'
import moment from 'moment'

import { Calendar as CalendarType } from './CalendarSideMenu'

export default function DateSelectingCalendar({
	selectedDate,
	setSelectedDate,
	minDate,
	maxDate,
	useView,
}: CalendarType) {
	const { view, setView } = useView
	const date = selectedDate.toDate()

	return (
		<Container className='date-selecting-calendar-container'>
			<Calendar
				onChange={(newDate: Date) =>
					setSelectedDate(moment(newDate || new Date()))
				}
				value={date}
				formatShortWeekday={(locale: string, date: Date) => ['S','M','T','W','T','F','S'][date.getDay()]}
				calendarType='US'
				view='month'
			/>
			<Typography>Selected Date: {date.toDateString()}</Typography>
		</Container>
	)
}
