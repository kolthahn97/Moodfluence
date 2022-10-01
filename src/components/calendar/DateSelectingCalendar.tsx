import { TextField } from '@mui/material'
import { LocalizationProvider, StaticDatePicker } from '@mui/x-date-pickers'
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import moment, { Moment } from 'moment'
import { useState } from 'react'

export default function DateSelectingCalendar() {
	const [value, setValue] = useState<Moment | null>(moment())

	return (
		<LocalizationProvider dateAdapter={AdapterMoment}>
			<StaticDatePicker
				displayStaticWrapperAs='desktop'
				value={value}
				onChange={(newValue: Moment | null) => {
					setValue(newValue)
				}}
				renderInput={(params) => <TextField {...params} />}
			/>
		</LocalizationProvider>
	)
}
