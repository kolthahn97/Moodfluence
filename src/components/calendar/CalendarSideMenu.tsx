import { Box } from '@mui/material'
import moment, { Moment } from 'moment'
import { Dispatch, SetStateAction } from 'react'
import styles from './Calendar.module.scss'

import DateSelectingCalendar from './DateSelectingCalendar'
import DefaultCalendarChips from './DefaultCalendarChips'

export interface View {
	view: 'day' | 'week' | 'month' | 'year'
	setView: Dispatch<SetStateAction<'day' | 'week' | 'month' | 'year'>>
}

export interface Calendar {
	selectedDate: Moment
	setSelectedDate: (selectedDate: Moment) => void
	useView: View 
	minDate: Moment
	maxDate: Moment
}

interface CalendarSideMenuProps {
	calendar: Calendar
}

export default function CalendarSideMenu({ calendar }: CalendarSideMenuProps) {
	return (
		<Box className={styles.panel}>
			<DefaultCalendarChips calendar={calendar} />
			<DateSelectingCalendar
				selectedDate={calendar.selectedDate}
				setSelectedDate={calendar.setSelectedDate}
				minDate={calendar.minDate}
				maxDate={calendar.maxDate}
				useView={calendar.useView}
			/>
		</Box>
	)
}
