import './Calendar.scss'

import { Box } from '@mui/material'
import moment, { Moment } from 'moment'
import { Dispatch, SetStateAction } from 'react'

import DateSelectingCalendar from './DateSelectingCalendar'
import DefaultCalendarChips from './DefaultCalendarChips'

export enum ViewLevel {
	Day,
	Week,
	Month,
	Year,
}

export interface View {
	view: ViewLevel
	setView: Dispatch<SetStateAction<ViewLevel>>
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
		<Box className='panel'>
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
