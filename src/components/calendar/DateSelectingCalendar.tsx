import { TextField } from '@mui/material'
import { LocalizationProvider, StaticDatePicker } from '@mui/x-date-pickers'
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import moment, { Moment } from 'moment'

import { Calendar } from './CalendarSideMenu'

export default function DateSelectingCalendar({
	selectedDate,
	setSelectedDate,
	minDate,
	maxDate,
	useView
}: Calendar) {
	const {view, setView} = useView
	return (
		<LocalizationProvider dateAdapter={AdapterMoment}>
			<StaticDatePicker
				displayStaticWrapperAs='desktop'
				value={selectedDate}
				onChange={(newValue: Moment | null) => {
					setSelectedDate(newValue || moment())
				}}
				renderInput={(props) => <TextField {...props} />}
				minDate={minDate}
				maxDate={maxDate}
			/>
			
		</LocalizationProvider>
	)
}
